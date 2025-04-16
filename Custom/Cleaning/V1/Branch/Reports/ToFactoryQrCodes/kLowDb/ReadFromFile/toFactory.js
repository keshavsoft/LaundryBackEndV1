import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch,inFromDate, inToDate }) => {
    let LocalBranchName = inBranch;
    const modifiedBranch = LocalBranchName.replace("BranOrders", "");

    let LocalData = buildData({ inBranch: modifiedBranch,inFromDate, inToDate });

    let jVarLocalUnScanned = LocalData.filter(element => element.BranchScan === true);

    let LocalArrayReverseData = jVarLocalUnScanned.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
