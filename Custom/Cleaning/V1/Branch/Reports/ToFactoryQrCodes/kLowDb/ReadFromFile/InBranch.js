import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch ,inFromDate, inToDate }) => {
    let LocalBranchName = inBranch;
    const modifiedBranch = LocalBranchName.replace("BranOrders", "");

    let jVarLocalTransformedData = buildData({ inBranch: modifiedBranch,inFromDate, inToDate });

    let jVarLocalUnScanned = jVarLocalTransformedData.filter(element => {
        return element.BranchScan === false;
    });

    let LocalArrayReverseData = jVarLocalUnScanned.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
