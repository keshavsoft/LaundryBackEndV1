import { StartFunc as BranchDc } from '../../../../../../../../../../../binV4/BranToFactDC/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as BranchScan } from '../../../../../../../../../../../binV4/BranToFactBScan/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inId }) => {
    let localId = inId;
    let LocalBranchDcData = BranchDc();
    let LocalBranchScanData = BranchScan();
    let LocalReturnData = { KTF: false }

    let LocalFilterBranchDcData = LocalBranchDcData.find(element => element.pk == localId);

    if (LocalFilterBranchDcData === undefined) {
        LocalReturnData.KReason = `No data ${localId}`
        return LocalReturnData;
    };
    let LocalFilterBranchScanDataCount = LocalBranchScanData.filter(element => element.VoucherRef == localId).length;

    LocalReturnData.QrCount = LocalFilterBranchScanDataCount;
    LocalReturnData.AsIs = LocalFilterBranchDcData;
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFunc };
