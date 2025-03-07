import { StartFunc as PullData } from "../../../../../../../binV4/BranToFactDC/Show/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
    let LocalQrCodeOriginalData = PullData();

    return LocalQrCodeOriginalData;
};

export { StartFunc };
