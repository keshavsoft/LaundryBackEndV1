import { StartFunc as QrCodes } from '../../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as WashingScan } from '../../../../../../../../../binV4/WashingScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as EntryScan } from '../../../../../../../../../binV4/BranToFactFScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as EntryCancelScan } from '../../../../../../../../../binV4/EntryCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as ReWashScan } from '../../../../../../../../../binV4/ReWashScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as BranchDC } from '../../../../../../../../../binV4/BranToFactDC/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inFactory, fromDate, toDate }) => {
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();
    const EntryScandb = EntryScan();
    const WashingScandb = WashingScan();
    const EntryCancelScandb = EntryCancelScan();
    const ReWashScanScandb = ReWashScan();
    const BranchDCdb = BranchDC();

    let LocalFilterQr = Qrdb.filter(e => e.location === LocalFactory);
    let LocalFilterEntryScan = EntryScandb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterWashingScandb = WashingScandb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterCancelScan = EntryCancelScandb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterRewashScan = ReWashScanScandb.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterEntryScanData = LocalFilterEntryScan.filter(loopQr =>
        !LocalFilterCancelScan.some(loopScan => loopScan.QrCodeId == loopQr.QrCodeId)
    );

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterEntryScanData,
        inEntryScan: LocalFilterWashingScandb,
        inRewashScan: LocalFilterRewashScan,
        inBranchDC: BranchDCdb,
    });

    let localReturnData = getUnmatchedRecords({
        inFromQrData: jVarLocalTransformedData,
        inEntryScan: LocalFilterWashingScandb
    });

    let LocalArrayReverseData = localReturnData.slice().reverse();

    return jFLocalFactoryWideData({ inData: LocalArrayReverseData, inFactory, fromDate, toDate });
};

const jFLocalFactoryWideData = ({ inData, inFactory, fromDate, toDate }) => {
    return inData
        .filter(e => {
            const itemDate = e.DCDate.split('-').reverse().join('-').replace(/\//g, '-');
            return itemDate && itemDate >= fromDate && itemDate <= toDate && e.Factory === inFactory;
        })
        .reverse();
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScan, inRewashScan, inBranchDC }) => {
    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        if (!matchedRecord) return null;

        const match = inEntryScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const RewashFind = inEntryScan.find(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const BranchDcRecord = inBranchDC.find(loopQr => loopQr.pk == loopScan.VoucherRef);

        return {
            OrderNumber: matchedRecord?.GenerateReference?.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData?.OrderData?.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,
            ReWashStatus: RewashFind?.ReWash,
            QrCodeId: loopScan.QrCodeId,
            DCDate:BranchDcRecord?.Date,
            Factory: BranchDcRecord?.Factory,
            BranchName: loopScan?.BranchName,
            Status: match,
            EntryScanDate: new Date(matchedRecord?.DateTime).toLocaleDateString('en-GB'),
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record !== null);

    return jVarLocalReturnObject;
};

let getUnmatchedRecords = ({ inFromQrData, inEntryScan }) =>
    inFromQrData.filter(loopQr => {
        let LocalFind = inEntryScan.find(loopScan => loopScan.QrCodeId === loopQr.QrCodeId);
        return !LocalFind || (LocalFind.ReWash && loopQr.QrCodeId === LocalFind.QrCodeId);
    });

function TimeSpan({ DateTime }) {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000);
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
}
export { StartFunc };
// To test:
// let result=StartFunc({ inFactory: "Vizag", fromDate: "10-04-2025", toDate: "10-04-2025" });
// console.log(result);
