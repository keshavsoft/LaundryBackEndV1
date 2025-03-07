import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckBrcnchScan } from "./Check/CheckBrcnchScan.js";
import { StartFunc as WashingCancelScan } from "./Check/WashingCancelScan.js";
import { StartFunc as PressingCancelScan } from "./Check/PressingCancelScan.js";
import { StartFunc as WashingScan } from "./Check/WashingScan.js";

let StartFunc = ({ inFactory, inDataInsert, inQrCodeId, inVoucherRef }) => {

    let LocalTable = inFactory;
    let LocalQrId = inQrCodeId;
    let LocalDc = inVoucherRef;
    let LocalDataInsert = inDataInsert;
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inQrId: LocalQrId });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchScan = CheckBrcnchScan({ inTable: LocalTable, inDc: LocalDc, inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchScan.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchReturnScan = WashingCancelScan({ inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchReturnScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchReturnScan.KReason
        return LocalReturnData;
    };

    let LocalCheckPressingCancelScan = PressingCancelScan({ inQrCodeId: LocalQrId });

    if (LocalCheckPressingCancelScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckPressingCancelScan.KReason
        return LocalReturnData;
    };

    let LocalCheckWashingScan = WashingScan({ inQrCodeId: LocalQrId });

    if (LocalCheckWashingScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckWashingScan.KReason
        return LocalReturnData;
    };

    let localInsert = StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert, inVoucherRef: LocalDc });

    if (localInsert.KTF === false) {
        LocalReturnData.KReason = localInsert.KReason
        return LocalReturnData;
    };

    LocalReturnData.QrCount = localInsert.QrCount;
    LocalReturnData.ScanNo = localInsert.ScanNo;
    LocalReturnData.QrData = LocalCheckQrCodes.JsonData;
    LocalReturnData.KTF = true;
    return LocalReturnData;

};

export { StartFunc };