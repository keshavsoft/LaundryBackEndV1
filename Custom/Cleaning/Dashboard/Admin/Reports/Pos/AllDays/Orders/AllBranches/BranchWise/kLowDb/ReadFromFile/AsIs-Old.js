import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();
    let filteredData = LocalQrCodeData.filter(item => item.FileData.length > 0);
    let LocalArrayReverseData = filteredData.slice().reverse();
    let mergedArray = [].concat(...LocalArrayReverseData.map(item => item.FileData));
    
    return mergedArray;
};

export { StartFunc };
