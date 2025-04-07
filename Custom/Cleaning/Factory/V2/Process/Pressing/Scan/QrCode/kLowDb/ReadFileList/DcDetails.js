import { StartFunc as PressingDC } from '../../../../../../../../../../binV4/PressingDC/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ id }) => {
    let localId = id;
    let LocalPressingDcData = PressingDC();
    let LocalReturnData = { KTF: false }

    let LocalFilterDcData = LocalPressingDcData.find(element => element.pk == localId);

    if (LocalFilterDcData === undefined) {
        LocalReturnData.KReason = `No data ${localId}`
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    LocalReturnData.AsIs = LocalFilterDcData;
    return LocalReturnData;
};

export { StartFunc };
