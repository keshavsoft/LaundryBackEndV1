import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';
import { StartFunc as PressingScan } from '../CommonFuncs/PressingScan.js';
import { StartFunc as PressingCancelScan } from '../CommonFuncs/PressingCancelScan.js';
import { StartFunc as WashingCancelScan } from '../CommonFuncs/WashingCancelScan.js';
import { StartFunc as Press_ReWashScan } from '../CommonFuncs/Press_ReWashScan.js';

let StartFunc = ({ inFactory, fromDate, toDate }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();

    const PressingScandb = PressingScan();

    const WashingScandb = WashingScan();

    const LocalPress_ReWashScanData = Press_ReWashScan();

    const PressingCancelScandb = PressingCancelScan();

    const WashingCancelScandb = WashingCancelScan();

    let LocalFilterWashing = WashingScandb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterPressingScan = PressingScandb.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterPressingCancelScan = PressingCancelScandb.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterEntryScanData = LocalFilterWashing.filter(loopQr =>
        !WashingCancelScandb.some(loopScan => loopScan.QrCodeId == loopQr.QrCodeId)
    );

    let LocalFilterQr = Qrdb.filter(e => e.location === LocalFactory);


    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterEntryScanData,
        inPressingScan: LocalFilterPressingScan,
        inEntryCancelScan: LocalFilterPressingCancelScan,
        inPress_ReWashScanData: LocalPress_ReWashScanData,
        inWashingScan: LocalFilterWashing
    });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return jFLocalFactoryWideData({ inData: LocalArrayReverseData, fromDate, toDate });

};

const jFLocalFactoryWideData = ({ inData, fromDate, toDate }) => {

    return inData
        .filter(e => {
            // console.log("e", e);
            const itemDate = e.DCDate.split('/').join('-').replace(/\//g, '-');
            return itemDate >= fromDate && itemDate <= toDate;
        })
        .reverse();
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inPressingScan, inEntryCancelScan, inPress_ReWashScanData, inWashingScan }) => {

    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inPressingScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const CheckEntryReturn = inEntryCancelScan.some(loopEntryReturnScan => loopEntryReturnScan.QrCodeId == loopScan.QrCodeId);
        const CheckPressReWash = inPress_ReWashScanData.some(loopPresRewahScan => loopPresRewahScan.QrCodeId == loopScan.QrCodeId && loopPresRewahScan.ReWash);
        const CheckWashingScan = inWashingScan.find(loopWashingScan => loopWashingScan.QrCodeId == loopScan.QrCodeId && loopWashingScan.QrCodeId);
        // console.log("CheckWashingScan", CheckWashingScan);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,
            BranchName: matchedRecord?.BookingData.OrderData.BranchName,
            // VoucherNumber: matchedWashingDc?.VoucherNumber,
            DCDate: new Date(CheckWashingScan?.DCDate).toLocaleDateString('en-GB'),
            // WashingScan: CheckWashingScan.QrCodeId,
            ReWash: CheckPressReWash,
            QrCodeId: loopScan.QrCodeId,
            Status: match,
            EntryReturnStatus: CheckEntryReturn,
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
// let Localdata = StartFunc({ inFactory: "Vizag", fromDate: "10-02-2025", toDate: "28-02-2025" }); console.log("Localdata", Localdata);
