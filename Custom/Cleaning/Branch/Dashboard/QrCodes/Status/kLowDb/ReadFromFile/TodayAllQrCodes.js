import { StartFunc as buildData } from '../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    const LocalQrCodeData = buildData({ inBranch });

    let filterData = LocalQrCodeData.filter(ele => ele.BranchName === inBranch);

    let LocalArrayReverseData = filterData.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
