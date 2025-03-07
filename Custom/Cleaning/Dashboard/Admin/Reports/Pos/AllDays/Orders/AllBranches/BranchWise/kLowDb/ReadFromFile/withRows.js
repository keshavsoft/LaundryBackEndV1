import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();
    let filteredData = LocalQrCodeData.filter(item => item.FileData.length > 0);
    let LocalArrayReverseData = filteredData.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
