import { StartFunc as EntryCancelDc } from '../CommonFuncs/EntryCancelDc.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';

const StartFunc = ({ id }) => {
    const localId = id;
    const LocalBranchDcData = EntryCancelDc();
    const LocalEntryScanData = EntryCancelScan();

    const LocalFilterBranchDcData = LocalBranchDcData.find(e => e.pk == localId);

    if (!LocalFilterBranchDcData) {
        return { KTF: false, KReason: `No data ${localId}` };
    };

    const LocalFilterBranchScanDataCount = LocalEntryScanData.filter(e => e.VoucherRef == localId).length;

    return {
        KTF: true,
        QrCount: LocalFilterBranchScanDataCount,
        AsIs: LocalFilterBranchDcData
    };
};
export { StartFunc };
