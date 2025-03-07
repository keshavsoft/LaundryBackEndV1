import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/BranToFactBScan.js';
import { StartFunc as BranToFactDC } from '../../../CommonFuncs/BranToFactDC.js';

const StartFunc = ({ inTable, inDc, inQrCodeId }) => {
    let LocalFactoryName = inTable;
    let LocalDc = inDc;
    let LocalQrCodeId = inQrCodeId;
    let LocalReturnData = { KTF: false };
    const LocalJsonData = StartFuncCommonFuncs();
    const LocalDcData = BranToFactDC();

    let LocalQrCheck = LocalJsonData.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck === undefined) {
        LocalReturnData.KReason = `No QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    if (parseInt(LocalQrCheck.VoucherRef) !== LocalDc) {
        LocalReturnData.KReason = `Not this Dc :${LocalDc}`
        return LocalReturnData;
    };

    if (LocalQrCheck.DCFactory !== LocalFactoryName) {
        LocalReturnData.KReason = `Not this Factory :${LocalFactoryName}`
        return LocalReturnData;
    };

    let LocaldcCheck = LocalDcData.find(e => e.pk == LocalDc);

    if (LocaldcCheck.SendDc == undefined || LocaldcCheck.SendDc !== true) {
        LocalReturnData.KReason = `Dc Not Sent :${LocalFactoryName}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;

    return LocalReturnData;
};
export { StartFunc };