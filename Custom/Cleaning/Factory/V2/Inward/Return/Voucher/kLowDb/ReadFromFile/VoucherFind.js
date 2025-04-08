import { StartFunc as EntryCancelDc } from '../../../../../../../../../binV4/EntryCancelDc/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as EntryCancelScan } from '../../../../../../../../../binV4/EntryCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js';

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
        JSONData: {
            QrCount: LocalFilterBranchScanDataCount,
            AsIs: LocalFilterBranchDcData
        }

    };
};

export { StartFunc };
