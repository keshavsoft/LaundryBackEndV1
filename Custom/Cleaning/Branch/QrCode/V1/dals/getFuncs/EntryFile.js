import { StartFunc as FilterInKeyInValue } from '../../kLowDb/ReadFromFile/FilterInKeyInValue.js';


let GetFilterFunc = ({ inFilterKey, inFilterValue }) => {
    let LocalFromLowDb = FilterInKeyInValue({ inFilterKey, inFilterValue });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};
export {
    GetFilterFunc
};