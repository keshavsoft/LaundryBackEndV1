import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckBrcnchScan } from "./Check/CheckBrcnchScan.js";
import { StartFunc as CheckReturnScan } from "./Check/CheckPressingReturnScan.js";
import { StartFunc as CheckPressingReWashScan } from "./Check/CheckPressingReWashScan.js";

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
    LocalDataInsert.BranchName = LocalCheckQrCodes.JsonData.BookingData.OrderData.BranchName
    let LocalCheckBrcnchScan = CheckBrcnchScan({ inTable: LocalTable, inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchScan.KReason
        return LocalReturnData;
    };

    let LocalCheckReturnScan = CheckReturnScan({ inQrCodeId: LocalQrId });

    if (LocalCheckReturnScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckReturnScan.KReason
        return LocalReturnData;
    };

    let LocalCheckPressingReWashScan = CheckPressingReWashScan({ inQrCodeId: LocalQrId });

    if (LocalCheckPressingReWashScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckPressingReWashScan.KReason
        return LocalReturnData;
    };

    let localInsert = StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert, inVoucherRef: LocalDc });

    if (localInsert.KTF === false) {
        LocalReturnData.KReason = localInsert.KReason
        return LocalReturnData;
    };

    LocalReturnData.QrCount = localInsert.QrCount;
    LocalReturnData.ScanNo = LocalQrId;
    LocalReturnData.QrData = LocalCheckQrCodes.JsonData;
    LocalReturnData.KTF = true;
    return LocalReturnData;

};

export { StartFunc };