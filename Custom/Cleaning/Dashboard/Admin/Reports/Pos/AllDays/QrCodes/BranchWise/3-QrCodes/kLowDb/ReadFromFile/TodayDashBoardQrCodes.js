import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    let CommonReplaceText = "BranOrders";
    let LocalBranch = inBranch.replace(CommonReplaceText, "");

    const LocalQrCodeData = buildData();
    const today = new Date().toISOString().split('T')[0];

    const LocalFilteredData = LocalQrCodeData.filter(element => {

        const elementDate = new Date(element.OrderDateTime).toISOString().split('T')[0];
        
        return element.BranchName === LocalBranch && elementDate === today;
    });

    return LocalFilteredData.slice().reverse();
};

export { StartFunc };
