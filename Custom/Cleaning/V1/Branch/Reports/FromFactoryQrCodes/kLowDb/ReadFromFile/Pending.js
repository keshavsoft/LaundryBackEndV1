import { StartFunc as F_F_Entry_Return_Scan } from '../../../../../../../../binV4/F_F_Entry_Return_Scan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as F_F_Pressing_Return_Scan } from '../../../../../../../../binV4/F_F_Pressing_Return_Scan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as F_F_Completion_Scan } from '../../../../../../../../binV4/F_F_Completion_Scan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as QrCodes } from '../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    const LocalBranch = inBranch;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");

    const QrCodesData = QrCodes();
    const EntryReturnScanData = F_F_Entry_Return_Scan();
    const PressingReturnScanData = F_F_Pressing_Return_Scan();
    const CompletionScanData = F_F_Completion_Scan();

    const FilteredEntryScan = EntryReturnScanData.filter(e => e.BranchName === modifiedBranch);
    const FilteredPressingReturnScan = PressingReturnScanData.filter(e => e.BranchName === modifiedBranch);
    const FilteredCompletionScanData = CompletionScanData.filter(e => e.BranchName === modifiedBranch);

    const MergedData = MergeDataFunc({
        inQrData: QrCodesData,
        inEntryReturn: FilteredEntryScan,
        inPressingReturn: FilteredPressingReturnScan,
        inCompletionData: FilteredCompletionScanData
    });
    // return MergedData.slice().reverse();
    return jFLocalBranchWideData({ inData: MergedData, inFromDate, inToDate });
};

const jFLocalBranchWideData = ({ inData, inFromDate, inToDate }) =>
    inData
        .filter(e => {
            const itemDate = e.OrderDateTime.split('/').join('-');
            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .filter(e =>
            !e.EntryReturnStatus ||
            !e.PressingReturnStatus ||
            !e.ComplletionStatus
        )
        .reverse();


let MergeDataFunc = ({ inQrData, inEntryReturn, inPressingReturn, inCompletionData }) =>
    inQrData.map(loopQr => ({
        QrCodeId: loopQr.pk,
        ItemName: loopQr.ItemName,
        Rate: loopQr.Rate,
        OrderNo: loopQr.GenerateReference.ReferncePk,
        DeliveryDateTime: new Date(loopQr.DeliveryDateTime).toLocaleDateString('en-GB'),
        location: loopQr.location,
        OrderDateTime: new Date(loopQr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
        EntryReturnStatus: inEntryReturn.some(loopScan => loopScan.QrCodeId == loopQr.pk),
        PressingReturnStatus: inPressingReturn.some(loopScan => loopScan.QrCodeId == loopQr.pk),
        ComplletionStatus: inCompletionData.some(loopScan => loopScan.QrCodeId == loopQr.pk),
        TimeSpan: GetTimeSpan({ DateTime: loopQr.DateTime })
    }));

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
// let Result = StartFunc({ inBranch: "BranOrdersLBC", inFromDate: "01-04-2025", inToDate: "15-04-2025" });
// console.log(Result);
