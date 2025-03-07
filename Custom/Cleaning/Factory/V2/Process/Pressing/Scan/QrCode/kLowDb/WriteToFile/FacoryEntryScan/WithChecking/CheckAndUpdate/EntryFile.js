import { StartFunc as Press_ReWashScan } from "../../../../../../../../../../../../../binV4/Press_ReWashScan/Create/kLowDb/CommonFuncs/ReturnDbObject.js";

const StartFunc = ({ inDatedb, inDataToInsert, inVoucherRef }) => {
    let LocalQrId = inDataToInsert.QrCodeId;
    let localDate = inDatedb.data;
    let LocalReturnData = { KTF: false };
    let LocalPress_ReWashScandb = Press_ReWashScan();

    let localFindData = localDate.find(loopQr => loopQr.QrCodeId == LocalQrId);

    if (localFindData === undefined) {
        return LocalReturnData;
    };

    if (localFindData.ReWash !== true) {
        return LocalReturnData;
    };

    jFLocalPresRewashUpdate({ db: LocalPress_ReWashScandb, inQrId: LocalQrId });

    localFindData.ReWash = false,
    localFindData.VoucherRef = inDataToInsert.VoucherRef,
    LocalReturnData.QrCodeId = localFindData.QrCodeId
    inDatedb.write();
    let localFiterData = localDate.filter(el => el.VoucherRef == inVoucherRef).length;
    LocalReturnData.QrCount = localFiterData;
    LocalReturnData.ScanNo = LocalQrId;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const jFLocalPresRewashUpdate = ({ db, inQrId }) => {
    db.read()
    let localPress_ReWashScanFindData = db.data.find(loopQr => loopQr.QrCodeId == inQrId);

    if (localPress_ReWashScanFindData) {
        localPress_ReWashScanFindData.ReWash = false,
        db.write();
    };
}


export { StartFunc };