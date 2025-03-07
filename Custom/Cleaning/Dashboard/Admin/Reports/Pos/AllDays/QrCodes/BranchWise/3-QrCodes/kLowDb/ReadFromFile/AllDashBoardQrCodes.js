import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    let CommonReplaceText = "BranOrders";
    let LocalBranch = inBranch.replace(CommonReplaceText, "");

    const LocalQrCodeData = buildData();

    const LocalFilteredData = LocalQrCodeData.filter(element => {
        return element.BranchName === LocalBranch;
    });

    return LocalFilteredData.slice().reverse();
};

export { StartFunc };
