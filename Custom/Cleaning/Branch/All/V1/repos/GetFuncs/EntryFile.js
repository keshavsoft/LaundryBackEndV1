import {
    GetFuncs as GetFuncsDal,
    GetOrdersDeleteFunc as GetOrdersDeleteFuncDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetOrdersDeleteFunc = async ({ inBranch }) => {
    let LocalFromDal = await GetOrdersDeleteFuncDal({ inBranch });

    return LocalFromDal;
};

export {
    GetFuncs, GetOrdersDeleteFunc
};