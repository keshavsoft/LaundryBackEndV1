import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/FromApi/FactoryOut_QrCodeScan.js';

const StartFunc = ({ inTable, inQrCodeId, inVoucher }) => {
    let LocalBranchName = inTable;
    let LocalQrCodeId = inQrCodeId;
    let LocalinVoucher = inVoucher;

    let LocalReturnData = { KTF: false };
    const QrCodesData = StartFuncCommonFuncs();

    let LocalQrCheck = QrCodesData.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck === undefined) {
        LocalReturnData.KReason = `No QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    if (LocalQrCheck.BranchName !== LocalBranchName) {
        LocalReturnData.KReason = `Not this Branch :${LocalBranchName}`
        return LocalReturnData;
    };

    if (LocalQrCheck.VoucherRef !== LocalinVoucher) {
        LocalReturnData.KReason = `Not this Voucher :${LocalinVoucher}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };