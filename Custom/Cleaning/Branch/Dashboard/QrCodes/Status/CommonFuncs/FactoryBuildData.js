import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as WashingScan } from './WashingScan.js';
import { StartFunc as PressingScan } from "./PressingScan.js";
import { StartFunc as CompletionScan } from "./CompletionScan.js";
import { StartFunc as PressingRejectScan } from "./PressingRejectScan.js";
import { StartFunc as prepareCollection } from "./prepareCollectionForFactory.js";
import { StartFunc as Press_ReWashScan } from "./Press_ReWashScan.js";
import { StartFunc as EntryCancelScan } from "./EntryCancelScan.js";
import { StartFunc as FactoryToBranchScan } from "./FactoryToBranchScan.js";


let StartFunc = () => {

    const QrCodeData = QrCodes();
    const WashingScanData = WashingScan();
    const PressingScanData = PressingScan();
    const CompletionScanData = CompletionScan();
    const PressingRejectScanData = PressingRejectScan();
    const Press_ReWashScanData = Press_ReWashScan();
    const EntryCancelScanData = EntryCancelScan();
    const FactoryToBranch_Scan = FactoryToBranchScan();


    let jVarLocalTransformedData = prepareCollection({
        inQrData: QrCodeData,
        inWashingScanData: WashingScanData,
        inPressingScanData: PressingScanData,
        inCompletionScanData: CompletionScanData,
        inPressingRejectScanData: PressingRejectScanData,
        inEntryCancelScanData: EntryCancelScanData,
        inPress_ReWashScanData: Press_ReWashScanData,
        inFactoryToBranch_Scan: FactoryToBranch_Scan
    });

    return jVarLocalTransformedData;
};

export { StartFunc };
