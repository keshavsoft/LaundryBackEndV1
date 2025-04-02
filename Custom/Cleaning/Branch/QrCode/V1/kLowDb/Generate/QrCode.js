import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as StartFuncReadBranchFile } from '../CommonFuncs/CustomeReadFile.js';
import { StartFunc as StartFuncNoOrderCheck } from "./Check/NoOrderCheck.js";
import { StartFunc as StartFuncSettlementCheck } from "./Check/SettlementCheck.js";
import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';

let StartFunc = ({ inBranch, inId }) => {
    let LocalTable = inBranch;
    let LocalBookingPk = inId;
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inBookingPk: LocalBookingPk });

    if (LocalCheckQrCodes.KTF === false) {
        return LocalReturnData;
    };

    let LocalBranchData = StartFuncReadBranchFile({ inTable: LocalTable });

    let LocalOrdeCheck = StartFuncNoOrderCheck({ inBranchData: LocalBranchData, inBookingPk: LocalBookingPk });

    if (LocalOrdeCheck.KTF === false) {
        LocalReturnData.KReason = LocalOrdeCheck.KReason;
        return LocalReturnData;
    };

    let LocalSettlementCheck = StartFuncSettlementCheck({ inBranchData: LocalBranchData, inBookingPk: LocalBookingPk });

    if (LocalSettlementCheck.KTF === false) {
        LocalReturnData.KReason = LocalSettlementCheck.KReason;
        return LocalReturnData;
    };

    let LocalIdByOrderData = LocalSettlementCheck.JsonData;

    let LocalGenerateReference = {}
    LocalGenerateReference.GenerateReference = {}
    LocalGenerateReference.GenerateReference.ReferncePk = LocalBookingPk;
    let LocalBookingData = {};
    LocalBookingData.BookingData = {};
    LocalBookingData.OrderNumber = LocalIdByOrderData.pk
    LocalBookingData.OrderUuId = LocalIdByOrderData.UuId
    LocalBookingData.BookingData.CustomerData = LocalIdByOrderData.CustomerData;
    LocalBookingData.BookingData.OrderData = LocalIdByOrderData.OrderData;
    LocalBookingData.BookingData.AddOnData = LocalIdByOrderData.AddOnData;
    LocalBookingData.BookingData.CheckOutData = LocalIdByOrderData.CheckOutData;

    Object.entries(LocalIdByOrderData.ItemsInOrder).forEach(([key, value]) => {
        LocalForEachFunc({ inGenerateReference: LocalGenerateReference, itemData: value, inBookingData: LocalBookingData });
    });
    LocalReturnData.KTF = true;
    delete LocalReturnData.JsonData;
    return LocalReturnData;
};

let LocalForEachFunc = ({ inGenerateReference, itemData, inBookingData }) => {

    for (let i = 0; i < itemData.Pcs; i++) {

        let LocalSendData = {};
        LocalSendData.Pcs = i
        LocalSendData = { ...inGenerateReference, ...itemData, ...inBookingData};
        StartFuncwriteFileFromModal({ inDataToInsert: LocalSendData });

    };
};

export { StartFunc };
