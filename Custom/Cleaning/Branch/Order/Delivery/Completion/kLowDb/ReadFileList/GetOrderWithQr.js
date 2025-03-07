import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as F_F_Completion_Scan } from '../CommonFuncs/F_F_Completion_Scan.js';
import { StartFunc as F_F_Pressing_Return_Scan } from '../CommonFuncs/F_F_Pressing_Return_Scan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/F_F_Entry_Return_Scan.js';
import { StartFunc as To_Delivery_Scan } from '../CommonFuncs/To_Delivery_Scan.js';

const StartFunc = ({ inOrderId, inBranch }) => {
    const LocalOrderId = inOrderId;
    const LocalBranch = inBranch;

    const LocalQrCodes = QrCodes();
    const LocalF_F_Completion_Scan = F_F_Completion_Scan();
    const LocalF_F_Pressing_Return_Scan = F_F_Pressing_Return_Scan();
    const LocalEntryCancelScan = EntryCancelScan();
    const LocalTo_Delivery_Scan = To_Delivery_Scan();

    const LocalFilterQrCodes = LocalQrCodes.filter(e => e.BookingData.OrderData.BranchName === LocalBranch && e.OrderNumber == LocalOrderId);
    if (LocalFilterQrCodes.length === 0) return false;

    const jVarLocalTransformedData = jFLocalMergeFunc({
        inOrederQrs: LocalFilterQrCodes,
        inFFCompletionScan: LocalF_F_Completion_Scan,
        inF_F_Pressing_Return_Scan: LocalF_F_Pressing_Return_Scan,
        inEntryCancelScan: LocalEntryCancelScan
    });

    const unmatchedRecords = jVarLocalTransformedData.filter(obj1 => !LocalTo_Delivery_Scan.some(obj2 => obj2.QrCodeId === obj1.QrCodeId)).reverse();
    const LocarOrderLength = LocalTo_Delivery_Scan.filter(el => el.OrderNumber == LocalOrderId).length;

    return {
        QrCount: LocarOrderLength,
        AsIs: unmatchedRecords,
        OrderData: {
            CustomerName: unmatchedRecords[0].CustomerName,
            CustomerMobile: unmatchedRecords[0].CustomerMobile,
            OrderNumber: unmatchedRecords[0].OrderNumber
        }
    };
};

const jFLocalMergeFunc = ({ inOrederQrs, inEntryCancelScan, inFFCompletionScan, inF_F_Pressing_Return_Scan }) => {
    return inOrederQrs.map(loopDc => ({
        OrderNumber: loopDc.OrderNumber,
        CustomerName: loopDc.BookingData.CustomerData.CustomerName,
        CustomerMobile: loopDc.BookingData.CustomerData.CustomerMobile,
        OrderDate: new Date(loopDc.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
        DeliveryDate: new Date(loopDc.DeliveryDateTime).toLocaleDateString('en-GB'),
        ItemName: loopDc.ItemName,
        Rate: loopDc.Rate,
        QrCodeId: loopDc.pk,
        BranchName: loopDc.BookingData.OrderData.BranchName,
        EntryReturn: inEntryCancelScan.some(qr => qr.QrCodeId == loopDc.pk),
        ProcessReturn: inF_F_Pressing_Return_Scan.some(qr => qr.QrCodeId == loopDc.pk),
        Completion: inFFCompletionScan.some(qr => qr.QrCodeId == loopDc.pk),
        TimeSpan: TimeSpan({ DateTime: loopDc.DateTime })
    }));
};

const TimeSpan = ({ DateTime }) => {
    const diffMs = new Date() - new Date(DateTime);
    const diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    const diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    const diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) return `${diffMonths} months, ${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    if (diffDays > 0) return `${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    if (diffHrs > 0) return `${diffHrs} hours, ${diffMins} min`;
    return `${diffMins} min`;
};

export { StartFunc };
