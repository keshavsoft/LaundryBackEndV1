import { StartFunc as StartFuncPullData } from "../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js";
// import { StartFunc as PullData } from "../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    let LocalQrCodeOriginalData = StartFuncPullData();

    let LocalFilteredData = LocalQrCodeOriginalData.filter(e => {
        return e.BookingData.OrderData.BranchName === LocalBranchName;
    });

    return LocalFilteredData;
};

export { StartFunc };
