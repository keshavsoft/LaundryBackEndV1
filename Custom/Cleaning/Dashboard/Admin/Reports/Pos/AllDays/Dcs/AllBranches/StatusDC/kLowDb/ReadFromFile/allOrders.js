import { StartFunc as buildData } from '../../../../CommonFuncs/GetVoucherQrStatus.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    // let LocalArrayReverseData = LocalQrCodeData.slice().reverse();

    return LocalQrCodeData;
};

export { StartFunc };
