import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/Press_ReWashScan.js';

const StartFunc = ({ inQrCodeId }) => {
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalQrCheck = dbForQrCodes.find(e => e.QrCodeId == LocalQrCodeId && e.ReWash);

    if (LocalQrCheck !== undefined) {
        LocalReturnData.KReason = `ReWash QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };