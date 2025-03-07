import { StartFunc as PullData } from "../../../../../../../binV4/QrCodes/Show/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    let LocalQrCodeOriginalData = PullData();

    let LocalFilteredData = LocalQrCodeOriginalData.filter(e => {
        return e.BookingData.OrderData.BranchName === LocalBranchName;
    });

    return LocalFilteredData;
};

export { StartFunc };
