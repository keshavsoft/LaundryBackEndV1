import {
    GetAllFuncs as GetAllFuncsDal,
    GetWithRowsFuncs as GetWithRowsFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let GetWithRowsFuncs = () => {
    return GetWithRowsFuncsDal();
};

export {
    GetFuncs, GetWithRowsFuncs
};