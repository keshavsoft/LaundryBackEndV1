import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as ReWashScan } from '../CommonFuncs/Press_ReWashScan.js';
import { StartFunc as ReWashDC } from '../CommonFuncs/Press_ReWashDC.js';
import { StartFunc as EntryScan } from '../CommonFuncs/BranToFactFScan.js';

let StartFunc = ({ inFactory }) => {
    let LocalFactory = inFactory;
    const Qrdb = QrCodes();
    const ReWashDCdb = ReWashDC();
    const ReWashScandb = ReWashScan();
    const EntryScandb = EntryScan();

    let LocalFilterReWashDC = ReWashDCdb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterReWashScan = ReWashScandb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterQr = Qrdb.filter(e => e.location === LocalFactory);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterReWashScan,
        inReWashDC: LocalFilterReWashDC,
        inEntryScan: EntryScandb
    });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inReWashDC, inEntryScan}) => {

    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const matchedReWashDC = inReWashDC.find(loopDC => loopDC.pk == loopScan.QrCodeId);
        const matchedEntryScan = inEntryScan.find(loopDC => loopDC.QrCodeId == loopScan.QrCodeId);
        

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,
            BranchName: matchedRecord?.BookingData.OrderData.BranchName,
            DcNumber:loopScan.VoucherRef,
            ReWash:loopScan.ReWash,
            VoucherNumber: matchedReWashDC?.VoucherRef,
            QrCodeId: loopScan.QrCodeId,
            DCDate: new Date(loopScan?.DCDate).toLocaleDateString('en-GB'),
            EntryScanDate: new Date(matchedEntryScan?.DateTime).toLocaleDateString('en-GB'),
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record.MatchedRecord !== null);
    return jVarLocalReturnObject;
};

function TimeSpan({ DateTime }) {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
};
// StartFunc({inFactory:"Vizag"})
export { StartFunc };
