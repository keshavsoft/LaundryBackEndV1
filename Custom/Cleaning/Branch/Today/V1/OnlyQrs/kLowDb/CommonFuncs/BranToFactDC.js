// import { StartFunc as PullData } from "../../../../../../../../binV4/BranToFactDC/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as PullData } from "../../../../../../../../binV4/BranToFactDC/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
    let LocalQrCodeOriginalData = PullData();

    return LocalQrCodeOriginalData;
};

export { StartFunc };
