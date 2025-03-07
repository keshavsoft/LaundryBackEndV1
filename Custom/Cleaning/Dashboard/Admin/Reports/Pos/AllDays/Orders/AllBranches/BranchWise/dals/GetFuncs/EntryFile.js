import { StartFunc as StartFuncWithRows } from '../../kLowDb/ReadFromFile/withRows.js';
import { StartFunc as StartFuncAsIs } from '../../kLowDb/ReadFromFile/AsIs.js';

let GetAllFuncs = () => {
    return StartFuncAsIs();
};

let GetWithRowsFuncs = () => {
    return StartFuncWithRows();
};

export {
    GetAllFuncs, GetWithRowsFuncs
};