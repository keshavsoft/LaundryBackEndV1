import { StartFunc as F_F_Entry_Return_Scan } from '../../../../../../../../binV4/EntryCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as F_F_Pressing_Return_Scan } from '../../../../../../../../binV4/PressingCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as F_F_Completion_Scan } from '../../../../../../../../binV4/FactoryOut_QrCodeScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as QrCodes } from '../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as EntryCancelDc } from '../../../../../../../../binV4/EntryCancelDc/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as PressingCancelDC } from '../../../../../../../../binV4/PressingCancelDC/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as CompletionDC } from '../../../../../../../../binV4/CompletionDC/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    const LocalBranch = inBranch;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");

    const QrCodesData = QrCodes();
    const EntryReturnScanData = F_F_Entry_Return_Scan();
    const PressingReturnScanData = F_F_Pressing_Return_Scan();
    const CompletionScanData = F_F_Completion_Scan();
    const EntryCancelDcData = EntryCancelDc();
    const PressingCandelDcData = PressingCancelDC();
    const CompletionCancelDcData = CompletionDC();

    const MergedWithCancelStatus = EntryReturnScanData.map(entryItem => {
        let isCancelled = EntryCancelDcData.find(e => e.pk == entryItem.VoucherRef);
        return {
            ...entryItem,
            FactoryName: isCancelled.FactoryName,
            DCDate: isCancelled.Date
        }
    });

    const MergedWithPressingCancel = PressingReturnScanData.map(entryItem => {
        let isCancelled = PressingCandelDcData.find(e => e.pk == entryItem.VoucherRef);
        return {
            ...entryItem,
            FactoryName: isCancelled.FactoryName,
            DCDate: isCancelled.Date
        }
    });

    const MergedWithCompletion = CompletionScanData.map(entryItem => {
        let isCancelled = CompletionCancelDcData.find(e => e.pk == entryItem.VoucherRef);
        return {
            ...entryItem,
            FactoryName: isCancelled.FactoryName,
            DCDate: isCancelled.Date
        }
    });
    // const FilteredEntryScan = EntryReturnScanData.filter(e => e.BranchName === modifiedBranch);
    // const FilteredPressingReturnScan = PressingReturnScanData.filter(e => e.BranchName === modifiedBranch);
    // const FilteredCompletionScanData = CompletionScanData.filter(e => e.BranchName === modifiedBranch);

    let LocalF_FReturnData = [...MergedWithCancelStatus, ...MergedWithPressingCancel, ...MergedWithCompletion];

    const MergedData = MergeDataFunc({
        inQrData: QrCodesData,
        inLocalF_FReturnData: LocalF_FReturnData,
        inEntryReturn: MergedWithCancelStatus,
        inPressingReturn: MergedWithPressingCancel,
        inCompletionData: MergedWithCompletion
    });

    return jFLocalBranchWideData({ inData: MergedData, inFromDate, inToDate });
};

const jFLocalBranchWideData = ({ inData, inFromDate, inToDate }) =>
    inData
        .filter(e => {
            const itemDate = e.OrderDateTime.split('/').join('-');
            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .reverse();

        let MergeDataFunc = ({ inLocalF_FReturnData, inQrData }) => {
            return inLocalF_FReturnData.map(loopQr => {
                let matchedQr = inQrData.find(loopScan => loopScan.pk == loopQr.QrCodeId);
                return {
                    QrCode: loopQr.pk,
                    ItemName: loopQr.ItemName,
                    Rate: loopQr.Rate,
                    OrderNo: loopQr.GenerateReference.ReferncePk,
                    DeliveryDateTime: new Date(loopQr.DeliveryDateTime).toLocaleDateString('en-GB'),
                    location: loopQr.location,
                    OrderDateTime: new Date(loopQr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
                    EntryReturnStatus: matchedQr,
                    TimeSpan: GetTimeSpan({ DateTime: loopQr.DateTime })
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
}

export { StartFunc };
// let Result = StartFunc({ inBranch: "BranOrdersLBC", inFromDate: "01-04-2025", inToDate: "16-04-2025" });
// console.log(Result);
