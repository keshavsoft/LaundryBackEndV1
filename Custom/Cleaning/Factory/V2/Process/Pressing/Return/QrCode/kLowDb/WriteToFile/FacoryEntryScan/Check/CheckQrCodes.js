import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/QrCodes.js';

const StartFuncForBookings = ({ inTable, inQrId, inBranch }) => {
    let LocalFactoryName = inTable;
    let LocalQrId = inQrId;
    let LocalBranchName = inBranch;


    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    dbForQrCodes.JsonData = dbForQrCodes.data;

    let LocalRowNeeded = dbForQrCodes.find(e => e.pk == LocalQrId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Qr Code :${LocalQrId}`
        return LocalReturnData;
    };

    if (LocalRowNeeded?.location !== LocalFactoryName) {
        LocalReturnData.KReason = `Not this Factory :${LocalQrId}`
        return LocalReturnData;
    };

    if (LocalRowNeeded.BookingData.OrderData.BranchName !== LocalBranchName) {
        LocalReturnData.KReason = `Not this Branch :${LocalQrId}`
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFuncForBookings };