import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as F_F_Completion_Scan } from '../CommonFuncs/F_F_Completion_Scan.js';
import { StartFunc as F_F_Pressing_Return_Scan } from '../CommonFuncs/F_F_Pressing_Return_Scan.js';
import { StartFunc as F_F_Entry_Return_Scan } from '../CommonFuncs/F_F_Entry_Return_Scan.js';
import { StartFunc as To_Delivery_Scan } from '../CommonFuncs/To_Delivery_Scan.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranToFactBScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/BranToFactFScan.js';
import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';
import { StartFunc as PressingScan } from "../CommonFuncs/PressingScan.js";
import { StartFunc as CompletionScan } from "../CommonFuncs/CompletionScan.js";
import { StartFunc as EntryCancelScan } from "../CommonFuncs/EntryCancelScan.js";
import { StartFunc as PressingCancelScan } from "../CommonFuncs/PressingCancelScan.js";

let StartFunc = ({ inOrderId, inBranch }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalOrderId = inOrderId;
    let LocalBranch = inBranch;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");

    const LocalQrCodes = QrCodes();

    const LocalF_F_Completion_Scan = F_F_Completion_Scan();
    const LocalF_F_Pressing_Return_Scan = F_F_Pressing_Return_Scan();
    const LocalF_F_Entry_Return_Scan = F_F_Entry_Return_Scan();
    const LocalTo_Delivery_Scan = To_Delivery_Scan();
    const LocalBranchScan = BranchScan();
    const LocalEntryScan = EntryScan();
    const LocalWashingScan = WashingScan();
    const LocalPressingScan = PressingScan();
    const LocalCompletionScan = CompletionScan();
    const LocalEntryCancelScan = EntryCancelScan();
    const LocalPressingCancelScan = PressingCancelScan();
    
    


    // console.log("LocalTo_Delivery_Scan;",LocalTo_Delivery_Scan);

    let LocalFilterQrCodes = LocalQrCodes.filter(e => e.BookingData.OrderData.BranchName === modifiedBranch && e.OrderNumber == LocalOrderId);

    if (LocalFilterQrCodes.length === 0) return false;

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inOrederQrs: LocalFilterQrCodes,
        inFFCompletionScan: LocalF_F_Completion_Scan,
        inF_F_Pressing_Return_Scan: LocalF_F_Pressing_Return_Scan,
        inF_F_Entry_Return_Scan: LocalF_F_Entry_Return_Scan,
        inTo_Delivery_Scan: LocalTo_Delivery_Scan,
        inBranchScan: LocalBranchScan,
        inEntryScan:LocalEntryScan,
        inWashingScan:LocalWashingScan,
        inPressingScan:LocalPressingScan,
        inCompletionScan:LocalCompletionScan,
        inEntryCancelScan: LocalEntryCancelScan,
        inPressingCancelScan: LocalPressingCancelScan,



    });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inOrederQrs, inF_F_Entry_Return_Scan, inFFCompletionScan, inF_F_Pressing_Return_Scan, inTo_Delivery_Scan, 
    inBranchScan, inEntryScan, inWashingScan, inPressingScan, inCompletionScan, inEntryCancelScan, inPressingCancelScan }) => {

    let jVarLocalReturnObject = inOrederQrs.map(loopDc => {
        const LocalF_F_Entry_Return_Scan = inF_F_Entry_Return_Scan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocaliPressing_Return = inF_F_Pressing_Return_Scan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalCompletion = inFFCompletionScan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalDelivery = inTo_Delivery_Scan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalBranchScan = inBranchScan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalEntryScan = inEntryScan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalWashingScan = inWashingScan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalPressingScan = inPressingScan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalCompletionScan = inCompletionScan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalEntryCancelScan = inEntryCancelScan.some(qr => qr.QrCodeId == loopDc.pk);
        const LocalPressingCancelScan = inPressingCancelScan.some(qr => qr.QrCodeId == loopDc.pk);


        // loopDc.TimeSpan = TimeSpan({ DateTime: loopDc.DateTime });
        return {
            OrderNumber: loopDc.OrderNumber,
            CustomerName: loopDc.BookingData.CustomerData.CustomerName,
            CustomerMobile: loopDc.BookingData.CustomerData.CustomerMobile,
            OrderDate: new Date(loopDc.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(loopDc.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: loopDc.ItemName,
            Rate: loopDc.Rate,
            QrCodeId: loopDc.pk,
            BranchName: loopDc.BookingData.OrderData.BranchName,
            EntryReturn: LocalF_F_Entry_Return_Scan,
            ProcessReturn: LocaliPressing_Return,
            Completion: LocalCompletion,
            Delivery: LocalDelivery,
            BranchScanStatus: LocalBranchScan,
            EntryScanStatus: LocalEntryScan,
            WashingScanStatus:LocalWashingScan,
            PressingScanStatus:LocalPressingScan,
            CompletionScanStatus:LocalCompletionScan,
            EntryCancel: LocalEntryCancelScan,
            PressingCancel: LocalEntryCancelScan,
            TimeSpan: TimeSpan({ DateTime: loopDc.DateTime })
        }
    });

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
