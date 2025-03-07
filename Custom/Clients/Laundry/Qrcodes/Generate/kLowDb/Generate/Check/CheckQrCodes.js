import { StartFunc as StartFuncCommonFuncs } from '../../CommonFuncs/QrCodes.js';

const StartFuncForBookings = ({ inTable, inBookingPk }) => {
    let LocalBranchName = inTable;
    let LocalBookingPk = inBookingPk;
    let LocalModifiedBranchName = inTable.replace("BranOrders", "");

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    // dbForQrCodes.JsonData;

    let LocalRowNeeded = dbForQrCodes.JsonData.find(e => e.OrderNumber == LocalBookingPk && e.BookingData.OrderData.BranchName == LocalModifiedBranchName);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KTF = true;
        return LocalReturnData;
    };

    return LocalReturnData;
};
export { StartFuncForBookings };