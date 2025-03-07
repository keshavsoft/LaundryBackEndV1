import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckF_F_Completion_Scan } from "./Check/CheckF_F_Completion_Scan.js";
import { StartFunc as CheckF_F_Entry_Return_Scan } from "./Check/CheckF_F_Entry_Return_Scan.js";
import { StartFunc as CheckF_F_Pressing_Return_Scan } from "./Check/CheckF_F_Pressing_Return_Scan.js";

let StartFunc = ({ inFactory, inDataInsert, inQrCodeId, inVoucher }) => {

    let LocalTable = inFactory;
    const modifiedBranch = LocalTable.replace("BranOrders", "");

    let LocalQrId = inQrCodeId;
    let LocalDataInsert = inDataInsert;
    let LocalVoucher = parseInt(inVoucher);
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: modifiedBranch, inQrId: LocalQrId });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckF_F_Completion_Scan = CheckF_F_Completion_Scan({ inTable: modifiedBranch, inQrCodeId: LocalQrId, inVoucher: LocalVoucher });
    let LocalCheckF_F_Entry_Return_Scan = CheckF_F_Entry_Return_Scan({ inTable: modifiedBranch, inQrCodeId: LocalQrId, inVoucher: LocalVoucher });
    let LocalCheckF_F_Pressing_Return_Scan = CheckF_F_Pressing_Return_Scan({ inTable: modifiedBranch, inQrCodeId: LocalQrId, inVoucher: LocalVoucher });

    if (LocalCheckF_F_Completion_Scan.KTF === false) {
        if (LocalCheckF_F_Entry_Return_Scan.KTF === false) {
            if (LocalCheckF_F_Pressing_Return_Scan.KTF === false) {
                LocalReturnData.KReason = LocalCheckF_F_Completion_Scan.KReason;
                return LocalReturnData;
            };
        };
    };

    let LocalInsert = StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert, inVoucher: LocalVoucher });

    if (LocalInsert.KTF === false) {
        LocalReturnData.KReason = LocalInsert.KReason
        return LocalReturnData;
    };
    LocalReturnData.QrCount = LocalInsert.QrCount;
    LocalReturnData.ScanNo = LocalInsert.ScanNo;
    LocalReturnData.QrData = LocalCheckQrCodes.JsonData;
    LocalReturnData.KTF = true;
    return LocalReturnData;

};

export { StartFunc };