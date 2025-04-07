import { StartFunc as PressingDC } from '../../../../../../../../../../binV4/PressingCancelDC/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as PressingCancelScan } from '../../../../../../../../../../binV4/PressingCancelScan/CommonPull/kLowDb/PullData/returnAsArray.js';


let StartFunc = ({ id }) => {
    let localId = id;
    let LocalPressingDcData = PressingDC();
    let LocalPressingCancelScanData = PressingCancelScan();
    let LocalReturnData = { KTF: false }

    let LocalFilterDcData = LocalPressingDcData.find(element => element.pk == localId);

    if (LocalFilterDcData === undefined) {
        LocalReturnData.KReason = `No data ${localId}`
        return LocalReturnData;
    };

    const LocalFilterBranchScanDataCount = LocalPressingCancelScanData.filter(e => e.VoucherRef == localId).length;

    LocalReturnData.KTF = true;
    QrCount:LocalFilterBranchScanDataCount;
    LocalReturnData.AsIs = LocalFilterDcData;
    return LocalReturnData;
};

export { StartFunc };
