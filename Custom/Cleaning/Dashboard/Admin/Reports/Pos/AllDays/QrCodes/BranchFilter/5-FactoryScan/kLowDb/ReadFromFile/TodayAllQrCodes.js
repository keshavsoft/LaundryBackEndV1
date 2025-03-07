import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranchName }) => {
    let LocalQrCodeData = buildData();

    LocalQrCodeData = LocalQrCodeData.filter(element => {
        return element.BranchName === inBranchName && element.EntryScan === true;
    });

    return LocalQrCodeData.slice().reverse();
    // return groupByBranch({ inDataAsArray: LocalQrCodeData });
};

export { StartFunc };
