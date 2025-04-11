import { StartFunc as buildData } from './CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    let LocalArrayReverseData = LocalQrCodeData.slice().reverse();

    let mergedArray = [].concat(...LocalArrayReverseData.map(item => item.FileData));

    return mergedArray;
};

export { StartFunc };
