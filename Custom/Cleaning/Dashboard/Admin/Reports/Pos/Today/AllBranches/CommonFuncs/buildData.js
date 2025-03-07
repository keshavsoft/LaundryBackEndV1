import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as BranToFactBScan } from './BranToFactBScan.js';
import { StartFunc as BranToFactFScan } from './BranToFactFScan.js';
import { StartFunc as WashingScan } from './WashingScan.js';
import { StartFunc as PressingScan } from "./PressingScan.js";
import { StartFunc as CompletionScan } from "./CompletionScan.js";
import { StartFunc as PressingRejectScan } from "./PressingRejectScan.js";
import { StartFunc as prepareCollection } from "./prepareCollection.js";

let StartFunc = () => {
    const QrCodeData = QrCodes();
    const BranToFactBScanData = BranToFactBScan();
    const BranToFactFScanData = BranToFactFScan();
    const WashingScanData = WashingScan();
    const PressingScanData = PressingScan();
    const CompletionScanData = CompletionScan();
    const PressingRejectScanData = PressingRejectScan();

    let jVarLocalTransformedData = prepareCollection({
        inQrData: QrCodeData,
        inBranToFactBScandata: BranToFactBScanData,
        inBranToFactFScanData: BranToFactFScanData,
        inWashingScanData: WashingScanData,
        inPressingScanData: PressingScanData,
        inCompletionScanData: CompletionScanData,
        inPressingRejectScanData: PressingRejectScanData
    });

    return jVarLocalTransformedData;
};

export { StartFunc };
