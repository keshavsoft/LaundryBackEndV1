import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranToFactBScan.js';
import { StartFunc as BranchDc } from '../CommonFuncs/BranToFactDC.js';
import { StartFunc as EntryScan } from '../CommonFuncs/BranToFactFScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';

let StartFunc = ({ inFactory, inId }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;
    let LocalId = inId;
    const Qrdb = QrCodes();
    const BranchDcdb = BranchDc();
    const EntryScandb = BranchScan();
    const EntryScdb = EntryScan();
    const EntryCancelScandb = EntryCancelScan();

    let LocalFilterBranchDC = BranchDcdb.filter(e => e.pk == LocalId);
    let LocalFilterQr = Qrdb.filter(e => e.location === LocalFactory);
    let LocalFilterEntryScan = EntryScandb.filter(e => e.DCFactory === LocalFactory);

    let LocalEntryScanAndDcMergeData = LoclaEntryScanAndDcMergeFunc({
        inEntryScan: LocalFilterEntryScan,
        inBranchDc: LocalFilterBranchDC
    });

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inEntryScan: LocalEntryScanAndDcMergeData,
        inEntrySc: EntryScdb,
        inEntryCancelScan: EntryCancelScandb
    });

    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inEntryScan, inEntrySc, inEntryCancelScan }) => {
    let jVarLocalReturnObject = inEntryScan.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const matchedEntryScan = inEntrySc.some(loopQr => loopQr.QrCodeId == loopScan.QrCodeId);
        const matchedEntryCancelScan = inEntryCancelScan.some(loopQr => loopQr.QrCodeId == loopScan.QrCodeId);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,
            Status: matchedEntryScan,
            Return: matchedEntryCancelScan,
            VoucherNumber: loopScan?.VoucherNumber,
            QrCodeId: loopScan.QrCodeId,
            DCDate: new Date(loopScan?.Date).toLocaleDateString('en-GB'),
            BranchName: loopScan?.BranchName,
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record.MatchedRecord !== null);
    return jVarLocalReturnObject;
};

const LoclaEntryScanAndDcMergeFunc = ({ inEntryScan, inBranchDc }) => {
    let LocalArray = [];

    inEntryScan.forEach(element => {
        let locaFindData = inBranchDc.find(e => e.pk == element.VoucherRef);

        if (locaFindData !== undefined) {
            let LocalMergeData = { ...locaFindData, ...element }
            LocalArray.push(LocalMergeData)
        };
    });

    return LocalArray;
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
// StartFunc({ inFactory: "Vizag" })
