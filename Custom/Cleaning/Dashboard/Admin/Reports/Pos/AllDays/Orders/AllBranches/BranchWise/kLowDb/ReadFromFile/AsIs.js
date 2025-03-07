import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    return LocalQrCodeData;
};

export { StartFunc };
