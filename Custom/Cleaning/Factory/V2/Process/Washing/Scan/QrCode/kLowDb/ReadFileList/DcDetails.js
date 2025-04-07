import { StartFunc as WashingDC } from '../../../../../../../../../../binV4/WashingDC/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as WashingScan } from '../../../../../../../../../../binV4/WashingScan/CommonPull/kLowDb/PullData/returnAsArray.js';

const StartFunc = ({ id }) => {
    const localId = id;
    const LocalBranchDcData = WashingDC();
    const LocalEntryScanData = WashingScan();

    const LocalFilterBranchDcData = LocalBranchDcData.find(e => e.pk == localId);

    if (!LocalFilterBranchDcData) {
        return { KTF: false, KReason: `No data ${localId}` };
    };

    // const LocalFilterBranchScanDataCount = LocalEntryScanData.filter(e => e.VoucherRef == localId).length;

    return {
        KTF: true,
        // QrCount: LocalFilterBranchScanDataCount,
        AsIs: LocalFilterBranchDcData
    };
};

export { StartFunc };
