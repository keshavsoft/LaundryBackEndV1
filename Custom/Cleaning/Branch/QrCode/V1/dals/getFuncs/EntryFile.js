import { StartFunc as FilterInKeyInValue } from '../../kLowDb/ReadFromFile/FilterInKeyInValue.js';
import { StartFunc as StartFuncFromGetGenerate } from '../../kLowDb/Generate/QrCode.js';

let GetFilterFunc = ({ inFilterKey, inFilterValue }) => {
    let LocalFromLowDb = FilterInKeyInValue({ inFilterKey, inFilterValue });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};
let GetGenerateFunc = async ({ inBranch, inId }) => {
    let LocalFromLowDb = await StartFuncFromGetGenerate({ inBranch, inId });

    return await LocalFromLowDb;
};



export {
    GetFilterFunc,
    GetGenerateFunc
};