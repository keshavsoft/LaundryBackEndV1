import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;
    const modifiedBranch = LocalBranchName.replace("BranOrders", "");

    let jVarLocalTransformedData = buildData({ inBranch: modifiedBranch });

    let jVarLocalUnScanned = jVarLocalTransformedData.filter(element => {
        return element.BranchScan === false;
    });

    let LocalArrayReverseData = jVarLocalUnScanned.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
