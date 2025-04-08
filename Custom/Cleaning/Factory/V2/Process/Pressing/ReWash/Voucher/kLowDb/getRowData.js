import { StartFunc as Press_ReWashDC } from '../../../../../../../../../binV4/Press_ReWashDC/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as Press_ReWashScan } from '../../../../../../../../../binV4/Press_ReWashScan/CommonPull/kLowDb/PullData/returnAsArray.js';

const StartFunc = ({ id }) => {
    const localId = id;
    const LocalBranchDcData = Press_ReWashDC();
    const LocalEntryScanData = Press_ReWashScan();

    const LocalFilterBranchDcData = LocalBranchDcData.find(e => e.pk == localId);

    if (!LocalFilterBranchDcData) {
        return { KTF: false, KReason: `No data ${localId}` };
    };

    const LocalFilterBranchScanDataCount = LocalEntryScanData.filter(e => e.VoucherRef == localId).length;

    return {
        KTF: true,
        JsonData: {
            QrCount: LocalFilterBranchScanDataCount,
            AsIs: LocalFilterBranchDcData
        }
    };
};

export { StartFunc };
