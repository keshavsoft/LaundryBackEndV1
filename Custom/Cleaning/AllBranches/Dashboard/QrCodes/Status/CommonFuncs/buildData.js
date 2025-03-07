import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as BranchScan } from './BranchScan.js';
import { StartFunc as EntryScan } from './EntryScan.js';
// import { StartFunc as WashingScan } from './WashingScan.js';
// import { StartFunc as PressingScan } from "./PressingScan.js";
// import { StartFunc as CompletionScan } from "./CompletionScan.js";
// import { StartFunc as PressingRejectScan } from "./PressingRejectScan.js";
import { StartFunc as prepareCollection } from "./prepareCollection.js";
// import { StartFunc as Press_ReWashScan } from "./Press_ReWashScan.js";
// import { StartFunc as EntryCancelScan } from "./EntryCancelScan.js";
// import { StartFunc as FactoryToBranchScan } from "./FactoryToBranchScan.js";


let StartFunc = () => {
    const QrCodeData = QrCodes();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();

    let jVarLocalTransformedData = prepareCollection({
        inQrData: QrCodeData,
        inBranchScandata: BranchScanData,
        inEntryScanData: EntryScanData,

    });

    return jVarLocalTransformedData;
};

export { StartFunc };
