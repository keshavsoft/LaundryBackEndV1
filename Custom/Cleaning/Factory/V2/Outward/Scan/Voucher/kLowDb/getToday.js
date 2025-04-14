import { StartFunc as BranchDc } from '../../../../../../../../binV4/CompletionDC/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as EntryScan } from '../../../../../../../../binV4/CompletionScan/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inFactory }) => {
    let LocalFactory = inFactory;

    const BranchDcdb = BranchDc();

    const EntryScandb = EntryScan();

    const today = new Date().toISOString().split("T")[0];

    let LocalFilterBranchDc = BranchDcdb.filter(e =>
        e.FactoryName === LocalFactory && e.Date?.startsWith(today)
    );

    let LocalFilterEntryScan = EntryScandb.filter(e =>
        e.FactoryName === LocalFactory && e.DCDate?.startsWith(today)
    );

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: LocalFilterBranchDc,
        inEntryScan: LocalFilterEntryScan
    });

    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inBranchDc, inEntryScan }) => {
    let jVarLocalReturnObject = inBranchDc.map(loopDc => {
        const LocalFilterData = inEntryScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        loopDc.ItemDetails = LocalFilterData.length;
        loopDc.Date = new Date(loopDc.Date).toLocaleDateString('en-GB');
        loopDc.TimeSpan = TimeSpan({ DateTime: loopDc.DateTime });
        return loopDc;
    });

    return jVarLocalReturnObject;
};

function TimeSpan({ DateTime }) {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
};

export { StartFunc };
// let Result = StartFunc({ inFactory: "Vizag" }); console.log(Result);

