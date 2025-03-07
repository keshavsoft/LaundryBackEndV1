import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranToFactBScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/BranToFactFScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';
import { StartFunc as BranchDc } from '../CommonFuncs/BranToFactDC.js';

let StartFunc = ({ inFactory }) => {
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();
    const BranchScandb = BranchScan();
    const EntryScandb = EntryScan();
    const EntryCancelScandb = EntryCancelScan();
    const BranchDcdb = BranchDc(); // Filter out records with SendDc as false

    let LocalFilterBranchScan = BranchScandb
    .filter(e => e.DCFactory === LocalFactory && BranchDcdb.some(el => el.SendDc === true && el.pk == e.VoucherRef));

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: Qrdb,
        inScandata: LocalFilterBranchScan,
        inEntryScan: EntryScandb,
        inEntryCancelScan: EntryCancelScandb,
        inBranchDC: BranchDcdb
    });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScan, inEntryCancelScan, inBranchDC }) => {
    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inEntryScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const CheckEntryReturn = inEntryCancelScan.some(loopEntryReturnScan => loopEntryReturnScan.QrCodeId == loopScan.QrCodeId);
        const matchedBranchDC = inBranchDC.find(loopDC => loopDC.pk == loopScan.VoucherRef);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,

            VoucherNumber: matchedBranchDC?.pk,
            DCDate: new Date(matchedBranchDC?.Date).toLocaleDateString('en-GB'),

            QrCodeId: loopScan.QrCodeId,
            BranchName: loopScan?.BranchName,
            Status: match,
            EntryReturnStarus: CheckEntryReturn,
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

export { StartFunc };
