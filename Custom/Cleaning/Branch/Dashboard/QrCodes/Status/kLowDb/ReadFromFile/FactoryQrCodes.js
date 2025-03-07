import { StartFunc as buildData } from '../../CommonFuncs/FactoryBuildData.js';

let StartFunc = ({ inFactory }) => {
    const LocalQrCodeData = buildData();

    let filterData = LocalQrCodeData.filter(ele => ele.location === inFactory);

    let LocalArrayReverseData = filterData.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
