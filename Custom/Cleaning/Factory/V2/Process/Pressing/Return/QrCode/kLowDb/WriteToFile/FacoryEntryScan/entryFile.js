import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckBrcnchScan } from "./Check/CheckBrcnchScan.js";
import { StartFunc as WashingCancelScan } from "./Check/WashingCancelScan.js";
import { StartFunc as CheckCompletionScan } from "./Check/CheckCompletionScan.js";

let StartFunc = ({ inFactory, inDataInsert }) => {

    let LocalTable = inFactory;
    let LocalQrId = inDataInsert.QrCodeId;
    let LocalDataInsert = inDataInsert;
    let LocalBranchName = LocalDataInsert?.BranchName;
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inQrId: LocalQrId, inBranch: LocalBranchName });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchScan = CheckBrcnchScan({ inTable: LocalTable, inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchScan.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchReturnScan = WashingCancelScan({ inTable: LocalTable, inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchReturnScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchReturnScan.KReason
        return LocalReturnData;
    };

    let LocalCheckCompletionScan = CheckCompletionScan({ inTable: LocalTable, inQrCodeId: LocalQrId });

    if (LocalCheckCompletionScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckCompletionScan.KReason
        return LocalReturnData;
    };

    return StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert });

};

export { StartFunc };