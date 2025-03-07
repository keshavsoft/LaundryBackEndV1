import {
    GetFuncs as GetFuncsDal,
    GetTodayFuncs as GetTodayFuncsDal,
    GetOrdersDeleteFunc as GetOrdersDeleteFuncDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetTodayFuncs = ({ inBranch }) => {
    return GetTodayFuncsDal({ inBranch });
};

let GetOrdersDeleteFunc = async ({ inBranch }) => {
    let LocalFromDal = await GetOrdersDeleteFuncDal({ inBranch });

    return LocalFromDal;
};

export {
    GetFuncs, GetTodayFuncs, GetOrdersDeleteFunc
};