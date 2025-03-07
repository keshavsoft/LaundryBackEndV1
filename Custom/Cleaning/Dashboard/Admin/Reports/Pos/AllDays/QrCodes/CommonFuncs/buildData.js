import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as BranchScan } from './BranToFactBScan.js';
import { StartFunc as EntryScan } from './BranToFactFScan.js';
import { StartFunc as WashingScan } from './WashingScan.js';
import { StartFunc as PressingScan } from "./PressingScan.js";
import { StartFunc as CompletionScan } from "./CompletionScan.js";
import { StartFunc as PressingRejectScan } from "./PressingRejectScan.js";
import { StartFunc as prepareCollection } from "./prepareCollection.js";
import { StartFunc as Press_ReWashScan } from "./Press_ReWashScan.js";
import { StartFunc as EntryCancelScan } from "./EntryCancelScan.js";
import { StartFunc as FactoryToBranchScan } from "./FactoryToBranchScan.js";
import { StartFunc as F_F_Entry_Return_Scan } from "./F_F_Entry_Return_Scan.js";
import { StartFunc as F_F_Pressing_Return_Scan } from "./F_F_Pressing_Return_Scan.js";
import { StartFunc as F_F_Completion_Scan } from "./F_F_Completion_Scan.js";
import { StartFunc as To_Delivery_Scan } from "./To_Delivery_Scan.js";

let StartFunc = () => {
    const QrCodeData = QrCodes();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();
    const WashingScanData = WashingScan();
    const PressingScanData = PressingScan();
    const CompletionScanData = CompletionScan();
    const PressingRejectScanData = PressingRejectScan();
    const Press_ReWashScanData = Press_ReWashScan();
    const EntryCancelScanData = EntryCancelScan();
    const FactoryToBranch_Scan = FactoryToBranchScan();
    const F_F_Entry_Return_ScanData = F_F_Entry_Return_Scan();
    const F_F_Pressing_Return_ScanData = F_F_Pressing_Return_Scan();
    const F_F_Completion_ScanData = F_F_Completion_Scan();
    const To_Delivery_ScanData = To_Delivery_Scan();

    let jVarLocalTransformedData = prepareCollection({
        inQrData: QrCodeData,
        inBranchScandata: BranchScanData,
        inEntryScanData: EntryScanData,
        inWashingScanData: WashingScanData,
        inPressingScanData: PressingScanData,
        inCompletionScanData: CompletionScanData,
        inPressingRejectScanData: PressingRejectScanData,
        inEntryCancelScanData: EntryCancelScanData,
        inPress_ReWashScanData: Press_ReWashScanData,
        inFactoryToBranch_Scan: FactoryToBranch_Scan,
        inF_F_Entry_Return_ScanData: F_F_Entry_Return_ScanData,
        inF_F_Pressing_Return_ScanData: F_F_Pressing_Return_ScanData,
        inF_F_Completion_ScanData: F_F_Completion_ScanData,
        inTo_Delivery_ScanData: To_Delivery_ScanData,

    });

    return jVarLocalTransformedData;
};

export { StartFunc };
