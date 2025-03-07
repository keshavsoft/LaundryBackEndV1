import {
    GetFuncs as GetFuncsDal,
    GetTodayFuncs as GetTodayFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetTodayFuncs = ({ inBranch }) => {
    return GetTodayFuncsDal({ inBranch });
};

export {
    GetFuncs, GetTodayFuncs
};