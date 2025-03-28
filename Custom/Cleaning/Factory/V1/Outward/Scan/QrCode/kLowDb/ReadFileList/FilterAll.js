import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as PressingScan } from '../CommonFuncs/PressingScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/CompletionScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/PressingCancelScan.js';

let StartFunc = ({ inFactory, fromDate, toDate }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;
    const Qrdb = QrCodes();
    const PressingScandb = PressingScan();
    const EntryScandb = EntryScan();
    const EntryCancelScandb = EntryCancelScan();
    let LocalFilterPressingScan = PressingScandb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterQr = Qrdb.filter(e => e.location === LocalFactory);
    let LocalFilterEntryScan = EntryScandb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterCancelScan = EntryCancelScandb.filter(e => e.FactoryName === LocalFactory);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inPressingScan: LocalFilterPressingScan,
        inEntryScan: LocalFilterEntryScan,
        inEntryCancelScan: LocalFilterCancelScan
    });

    const unmatchedRecords = jVarLocalTransformedData.filter(obj1 => { return !LocalFilterCancelScan.some(obj2 => obj2.QrCodeId == obj1.QrCodeId); });

    const unmatchedWashingData = unmatchedRecords.filter(obj1 => obj1.ReWash !== true);

    let LocalArrayReverseData = unmatchedWashingData.slice().reverse();

    return jFLocalFactoryWideData({ inData: LocalArrayReverseData, fromDate, toDate });

};

const jFLocalFactoryWideData = ({ inData, fromDate, toDate }) => {

    return inData
        .filter(e => {
            // console.log("e", e);
            const itemDate = e.DCDate.split('/').join('-').replace(/\//g, '-');
            // console.log("itemDate", itemDate);
            return itemDate >= fromDate && itemDate <= toDate;
        })
        .reverse();
};

let jFLocalMergeFunc = ({ inQrData, inPressingScan, inEntryScan, inEntryCancelScan }) => {
    // console.log("inPressingScan", inPressingScan);


    let jVarLocalReturnObject = inPressingScan.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inEntryScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const CheckEntryReturn = inEntryCancelScan.some(loopEntryReturnScan => loopEntryReturnScan.QrCodeId == loopScan.QrCodeId);
        const CheckPressingScan = inPressingScan.find(loopPressingScan => loopPressingScan.QrCodeId == loopScan.QrCodeId && loopPressingScan.QrCodeId);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,

            QrCodeId: loopScan.QrCodeId,
            ReWash: loopScan.ReWash,
            DCDate: new Date(CheckPressingScan?.DCDate).toLocaleDateString('en-GB'),
            BranchName: matchedRecord?.BookingData.OrderData.BranchName,
            Status: match,
            EntryReturnStarus: CheckEntryReturn,
            EntryScanDate: new Date(matchedRecord?.DateTime).toLocaleDateString('en-GB'),
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
// let Localdata = StartFunc({ inFactory: "Vizag", fromDate: "24-03-2025", toDate: "24-03-2025" }); console.log("Localdata", Localdata);
