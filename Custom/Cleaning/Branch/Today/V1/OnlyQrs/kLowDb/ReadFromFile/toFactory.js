import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;
    const modifiedBranch = LocalBranchName.replace("BranOrders", "");

    let LocalData = buildData({ inBranch: modifiedBranch });

    let jVarLocalUnScanned = LocalData.filter(element => element.BranchScan === true);

    let LocalArrayReverseData = jVarLocalUnScanned.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
