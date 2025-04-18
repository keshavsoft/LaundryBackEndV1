import { StartFunc as ReWashDC } from '../CommonFuncs/Press_ReWashDC.js';
import { StartFunc as ReWashScan } from '../CommonFuncs/Press_ReWashScan.js';

let LocalFindValue = () => {
    return new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
};

let StartFunc = ({ inFactory }) => {
    let LocalFactory = inFactory;
    let LocalDateValue = LocalFindValue();

    const ReWashDCdb = ReWashDC();

    const ReWashScandb = ReWashScan();

    let LocalFilterBranchDc = ReWashDCdb.filter(e => {
        return new Date(e.Date).toLocaleDateString('en-GB') === LocalDateValue && e.FactoryName === LocalFactory;
    });

    let LocalFilterEntryScan = ReWashScandb.filter(e => {
        return new Date(e.Date).toLocaleDateString('en-GB') === LocalDateValue && e.FactoryName === LocalFactory;
    });

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
        loopDc.TimeSpan = TimeSpan({ DateTime: loopDc.DateTime });
        loopDc.Date = new Date(loopDc.Date).toLocaleDateString('en-GB');
        return loopDc
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
