import { StartFunc as PullData } from "../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js";

let CommonFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

let StartFunc = () => {
    let LocalQrCodeData = PullData();
    return LocalQrCodeData;
};

export { StartFunc };
