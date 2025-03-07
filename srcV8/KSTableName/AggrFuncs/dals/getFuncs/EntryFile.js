import { StartFunc as getFunc } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as getRowFunc } from '../../kLowDb/ReadFromFile/getRowFunc.js';
import { StartFunc as getRowCountFunc } from '../../kLowDb/ReadFromFile/getRowCountFunc.js';

let GetFunc = () => {
    let LocalFromLowDb = getFunc();

    return LocalFromLowDb;
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = getRowFunc();

    return LocalFromLowDb;
};

let GetDataCountFunc = ({ inKey, inValue }) => {
    let LocalFromLowDb = getRowCountFunc({ inKey, inValue });

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc, GetDataCountFunc
};