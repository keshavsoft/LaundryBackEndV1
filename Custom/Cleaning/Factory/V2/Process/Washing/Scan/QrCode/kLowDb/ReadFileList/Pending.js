import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/BranToFactFScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';
import { StartFunc as ReWashScan } from '../CommonFuncs/ReWashScan.js';


let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();
    const EntryScandb = EntryScan();
    const WashingScandb = WashingScan();
    const EntryCancelScandb = EntryCancelScan();
    const ReWashScanScandb = ReWashScan();

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
        inRewashScan: LocalFilterRewashScan
    });
    let localReturnData = getUnmatchedRecords({ inFromQrData: jVarLocalTransformedData, inEntryScan: LocalFilterWashingScandb })

    let LocalArrayReverseData = localReturnData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScan, inRewashScan }) => {
    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inEntryScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const RewashFind = inEntryScan.find(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        
        
        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,
            ReWashStatus: RewashFind?.ReWash,
            QrCodeId: loopScan.QrCodeId,
            // DCDate: new Date(loopScan?.DCDate).toLocaleDateString('en-GB'),
            BranchName: loopScan?.BranchName,
            Status: match,
            EntryScanDate: new Date(matchedRecord?.DateTime).toLocaleDateString('en-GB'),
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record.MatchedRecord !== null);
    return jVarLocalReturnObject;
};

let getUnmatchedRecords = ({ inFromQrData, inEntryScan }) =>
    inFromQrData.filter(loopQr => {
        let LocalFind = inEntryScan.find(loopScan => loopScan.QrCodeId === loopQr.QrCodeId);
        return !LocalFind || (LocalFind.ReWash && loopQr.QrCodeId === LocalFind.QrCodeId);
    });

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
