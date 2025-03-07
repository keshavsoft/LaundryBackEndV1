import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as BranchScan } from './BranToFactBScan.js';
import { StartFunc as EntryScan } from './BranToFactFScan.js';
import { StartFunc as WashingScan } from './WashingScan.js';
import { StartFunc as PressingScan } from "./PressingScan.js";
import { StartFunc as CompletionScan } from "./CompletionScan.js";
import { StartFunc as PressingRejectScan } from "./PressingRejectScan.js";
import { StartFunc as prepareCollection } from "./prepareCollection.js";
import { StartFunc as CompletetedScanned } from "./FactoryToBranchCompletion.js";
import { StartFunc as EntryRejectScan } from "./EntryRejectScan.js";
import { StartFunc as PressingReWash } from "./PressingReWash.js";
import { StartFunc as F_F_Entry_Return_Scan } from "./F_F_Entry_Return_Scan.js";
import { StartFunc as F_F_Pressing_Return_Scan } from "./F_F_Pressing_Return_Scan.js";
import { StartFunc as F_F_Completion_Scan } from "./F_F_Completion_Scan.js";
import { StartFunc as To_Delivery_Scan } from "./To_Delivery_Scan.js";
import { StartFunc as Delivery } from "./Delivery.js";


let StartFunc = () => {
    const QrCodeData = QrCodes();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();
    const WashingScanData = WashingScan();
    const PressingScanData = PressingScan();
    const CompletionScanData = CompletionScan();
    const PressingRejectScanData = PressingRejectScan();
    const FactoryToBranchCompletion = CompletetedScanned();
    const EntryRejectScanData = EntryRejectScan();
    const PressingReWashScanData = PressingReWash();
    const F_F_Entry_Return_ScanData = F_F_Entry_Return_Scan();
    const F_F_Pressing_Return_ScanData = F_F_Pressing_Return_Scan();
    const F_F_Completion_ScanData = F_F_Completion_Scan();
    const To_Delivery_ScanData = To_Delivery_Scan();
    const DeliveryData = Delivery();


    let jVarLocalTransformedData = prepareCollection({
        inQrData: QrCodeData,
        inBranchScandata: BranchScanData,
        inEntryScanData: EntryScanData,
        inWashingScanData: WashingScanData,
        inPressingScanData: PressingScanData,
        inCompletionScanData: CompletionScanData,
        inPressingRejectScanData: PressingRejectScanData,
        inFactoryToBranch: FactoryToBranchCompletion,
        inEntryRejectScanData: EntryRejectScanData,
        inPressingReWashScanData: PressingReWashScanData,
        inF_F_Entry_Return_ScanData: F_F_Entry_Return_ScanData,
        inF_F_Pressing_Return_ScanData: F_F_Pressing_Return_ScanData,
        inF_F_Completion_ScanData: F_F_Completion_ScanData,
        inTo_Delivery_ScanData: To_Delivery_ScanData,
        inDeliveryData: DeliveryData


    });

    return jVarLocalTransformedData;
};

export { StartFunc };
