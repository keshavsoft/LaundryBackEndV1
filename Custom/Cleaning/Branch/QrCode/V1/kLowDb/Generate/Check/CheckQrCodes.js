import { StartFunc as StartFuncCommonFuncs } from '../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js';

const StartFuncForBookings = ({ inTable, inBookingPk }) => {
    let LocalBookingPk = inBookingPk;
    let LocalModifiedBranchName = inTable.replace("BranOrders", "");

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalRowNeeded = dbForQrCodes.find(e => e.OrderNumber == LocalBookingPk && e.BookingData.OrderData.BranchName == LocalModifiedBranchName);

    if (LocalRowNeeded) {
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFuncForBookings };