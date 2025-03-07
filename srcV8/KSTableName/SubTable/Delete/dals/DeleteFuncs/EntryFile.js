import { StartFunc as StartFuncwriteFile } from '../../kLowDb/DeleteFromFile/DeleteRow.js';

let DeleteSubKeyFunc = ({ inId, inKey, inSubId }) => {
    return StartFuncwriteFile({ inId, inKey, inSubId });
};

let DeleteFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

let ReferenceCheckFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

export { DeleteFunc, ReferenceCheckFunc, DeleteSubKeyFunc };