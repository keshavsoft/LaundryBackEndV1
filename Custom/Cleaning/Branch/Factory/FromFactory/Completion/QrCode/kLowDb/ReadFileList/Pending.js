import { StartFunc as QrCodes } from '../CommonFuncs/FromApi/QrCodes.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/FromApi/FactoryOut_QrCodeScan.js';
import { StartFunc as FromFactoryCancelScan } from '../CommonFuncs/FromApi/FromFactoryCancelScan.js';
import { StartFunc as EntryCancelDc } from '../CommonFuncs/FromApi/FactoryOut_DC.js';

let StartFunc = ({ inBranch }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalBranch = inBranch;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");

    const QrCodesData = QrCodes();
    const EntryCancelScanData = EntryCancelScan();
    const FromFactoryCancelScanData = FromFactoryCancelScan();
    const EntryCancelDcData = EntryCancelDc();

    const LocalFilterEntryCancelScanData = EntryCancelScanData.filter(e => e.BranchName === modifiedBranch);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: QrCodesData,
        inScandata: LocalFilterEntryCancelScanData,
        inEntryScan: FromFactoryCancelScanData,
        inBranchDC: EntryCancelDcData

    });
    let localReturnData = getUnmatchedRecords({ inFromQrData: jVarLocalTransformedData, inEntryScan: FromFactoryCancelScanData })

    let LocalArrayReverseData = localReturnData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScan, inBranchDC }) => {
    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inEntryScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const matchedBranchDC = inBranchDC.find(loopDC => loopDC.pk == loopScan.VoucherRef);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,

            VoucherNumber: matchedBranchDC?.pk,
            DCDate: new Date(loopScan?.DCDate).toLocaleDateString('en-GB'),

            QrCodeId: loopScan.QrCodeId,
            BranchName: loopScan?.BranchName,
            FactoryName: loopScan?.FactoryName,
            Status: match,
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record.MatchedRecord !== null);
    return jVarLocalReturnObject;
};

let getUnmatchedRecords = ({ inFromQrData, inEntryScan }) => {
    return inFromQrData.filter(loopQr =>
        !inEntryScan.some(loopScan => loopScan.QrCodeId == loopQr.QrCodeId)
    );
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
