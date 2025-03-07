import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as BranchScan } from './BranToFactBScan.js';
import { StartFunc as EntryScan } from './BranToFactFScan.js';
import { StartFunc as prepareCollection } from "./prepareCollection.js";

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;
    const QrCodeData = QrCodes();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();

    let jVarLocalTransformedData = prepareCollection({
        inQrData: QrCodeData,
        inBranchScandata: BranchScanData,
        inEntryScanData: EntryScanData,
        inBranchName:LocalBranchName

    });

    return jVarLocalTransformedData;
};

export { StartFunc };
