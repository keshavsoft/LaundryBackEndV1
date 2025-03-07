import { StartFunc as StartFuncCommonFuncs } from '../../CommonFuncs/QrCodes.js';

const StartFuncForBookings = ({ inTable, inQrId, InFactoryName }) => {
    let LocalBranchName = inTable;
    let LocalQrId = inQrId;
    let LocalFactoryName = InFactoryName;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalRowNeeded = dbForQrCodes.JsonData.find(e => e.pk == LocalQrId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Qr Code :${LocalQrId}`
        return LocalReturnData;
    };

    if (LocalRowNeeded.BookingData.OrderData.BranchName !== LocalBranchName) {
        LocalReturnData.KReason = `Not this Branch :${LocalRowNeeded.BookingData.OrderData.BranchName}`
        return LocalReturnData;
    };

    if (LocalRowNeeded.location !== LocalFactoryName) {
        LocalReturnData.KReason = `Not this Factory :${LocalRowNeeded.location}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalRowNeeded;
    return LocalReturnData;
};
export { StartFuncForBookings };