import { StartFunc as GetDc } from '../CommonFuncs/GetDc.js';

const StartFunc = ({ inFactory }) => {
    let BranchDcdb = GetDc({ inFactory });
    BranchDcdb = BranchDcdb.filter(ele => ele.SendDc && ele.Pending !== 0)
    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: BranchDcdb,
        // inEntryScan: LocalFilterEntryScan
    });
    return jVarLocalTransformedData;
};

let jFLocalMergeFunc = ({ inBranchDc }) => {

    let jVarLocalReturnObject = inBranchDc.map(loopDc => {
        loopDc.Date = new Date(loopDc.Date).toLocaleDateString('en-GB');
        loopDc.TimeSpan = TimeSpan({ DateTime: loopDc.DateTime });
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
