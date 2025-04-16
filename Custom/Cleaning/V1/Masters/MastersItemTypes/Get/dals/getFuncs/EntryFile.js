import { StartFunc as ReadFromFile } from '../../kLowDb/Get/getFunc.js';
import { StartFunc as getRowFunc } from '../../kLowDb/Get/getRowFunc.js';
import { StartFunc as FilterInKeyInValue } from '../../kLowDb/Get/FilterInKeyInValue.js';

let GetRowDataFunc = ({ inId }) => {
    let LocalFromLowDb = getRowFunc({ inId });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb.JsonData;
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

let GetFilterFunc = ({ inFilterKey, inFilterValue }) => {
    let LocalFromLowDb = FilterInKeyInValue({ inFilterKey, inFilterValue });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};
export {
    GetDataOnlyFunc, GetRowDataFunc,
    GetFilterFunc
};