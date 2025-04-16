import { StartFunc as EntryCancelScan } from '../../../../../../../../binV4/EntryCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as PressingCancelScan } from '../../../../../../../../binV4/PressingCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as FactoryOut_QrCodeScan } from '../../../../../../../../binV4/FactoryOut_QrCodeScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as QrCodes } from '../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as EntryCancelDc } from '../../../../../../../../binV4/EntryCancelDc/CommonPull/kLowDb/PullData/returnAsArray.js';
// import { StartFunc as PressingCancelDC } from '../../../../../../../../binV4/PressingCancelDC/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as FactoryOut_DC } from '../../../../../../../../binV4/FactoryOut_DC/CommonPull/kLowDb/PullData/returnAsArray.js';

import { StartFunc as F_F_Entry_Return_Scan } from '../../../../../../../../binV4/F_F_Entry_Return_Scan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as F_F_Pressing_Return_Scan } from '../../../../../../../../binV4/F_F_Pressing_Return_Scan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as F_F_Completion_Scan } from '../../../../../../../../binV4/F_F_Completion_Scan/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    const LocalBranch = inBranch;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");

    const QrCodesData = QrCodes();
    const EntryReturnScanData = EntryCancelScan();
    const PressingReturnScanData = PressingCancelScan();
    const LcalFactoryOut_QrCodeScan = FactoryOut_QrCodeScan();

    const EntryCancelDcData = EntryCancelDc();
    // const PressingCandelDcData = PressingCancelDC();
    const CompletionCancelDcData = FactoryOut_DC();

    const LocalF_F_Entry_Return_ScanData = F_F_Entry_Return_Scan();
    const LocalF_F_Pressing_Return_ScanData = F_F_Pressing_Return_Scan();
    const LocalF_F_Completion_ScanData = F_F_Completion_Scan();

    const MergedWithCancelStatus = LocalDcMergeFunc({ inQr: EntryReturnScanData, inDc: EntryCancelDcData });
    // const MergedWithPressingCancel = LocalDcMergeFunc({ inQr: PressingReturnScanData, inDc: PressingCandelDcData });
    const MergedWithCompletion = LocalDcMergeFunc({ inQr: LcalFactoryOut_QrCodeScan, inDc: CompletionCancelDcData });

    let LocalF_FSendData = [...MergedWithCancelStatus, ...PressingReturnScanData, ...MergedWithCompletion];
    let LocalF_FReturnData = [...LocalF_F_Entry_Return_ScanData, ...LocalF_F_Pressing_Return_ScanData, ...LocalF_F_Completion_ScanData];

    const MergedData = MergeDataFunc({
        inQrData: QrCodesData,
        inF_FSendData: LocalF_FSendData,
        inF_FReturnData: LocalF_FReturnData
    });

    return jFLocalBranchWideData({ inData: MergedData, inFromDate, inToDate, inBranch: modifiedBranch });
};

const jFLocalBranchWideData = ({ inData, inFromDate, inToDate, inBranch }) =>
    inData
        .filter(e => {
            const itemDate = e?.DCDate.split("-").reverse().join("-");
            return itemDate >= inFromDate && itemDate <= inToDate && e.BranchName === inBranch;
        })
        .reverse();

let MergeDataFunc = ({ inF_FSendData, inQrData, inF_FReturnData }) => {
    return inF_FSendData.map(loopQr => {

        let matchedQr = inQrData.find(loopScan => loopScan.pk == loopQr.QrCodeId);
        let LocalReturnScanStatus = inF_FReturnData.some(loopScan => loopScan.QrCodeId == loopQr.QrCodeId);
        return {
            QrCode: loopQr.QrCodeId,
            BranchName: matchedQr.BookingData.OrderData.BranchName,
            ItemName: matchedQr?.ItemName,
            Rate: matchedQr?.Rate,
            OrderNo: matchedQr?.OrderNumber,
            DCDate: loopQr.DCDate,
            DeliveryDateTime: new Date(matchedQr?.DeliveryDateTime).toLocaleDateString('en-GB'),
            location: matchedQr.location,
            OrderDateTime: new Date(matchedQr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            TimeSpan: GetTimeSpan({ DateTime: loopQr.DCDate }),
            ScanStatus: LocalReturnScanStatus
        };
    });
};

function GetTimeSpan({ DateTime }) {
    const now = new Date();
    const then = new Date(DateTime);
    const diffMs = now - then;

    const diffMonths = Math.floor(diffMs / 2629800000); // approx months
    const diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    const diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return `${diffMonths} months, ${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    } else if (diffDays > 0) {
        return `${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    } else if (diffHrs > 0) {
        return `${diffHrs} hours, ${diffMins} min`;
    } else {
        return `${diffMins} min`;
    }
};
const LocalDcMergeFunc = ({ inQr, inDc }) => {
    return inQr.map(entryItem => {
        let isCancelled = inDc.find(e => e.pk == entryItem.VoucherRef);
        return {
            ...entryItem,
            FactoryName: isCancelled?.FactoryName,
            DCDate: `${isCancelled?.Date || ''} ${entryItem?.DCDate || ''}`.trim() // Removes extra spaces if one is undefined
        };
    });
};



export { StartFunc };
// let Result = StartFunc({ inBranch: "BranOrdersCSO", inFromDate: "14-02-2025", inToDate: "16-04-2025" }); console.log(Result);
