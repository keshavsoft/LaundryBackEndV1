import {
    GetFuncs as GetFuncsDal,
    GetItemsFuncs as GetItemsFuncsDal,
    GetOrdersDeleteFunc as GetOrdersDeleteFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetItemsFuncs = ({ inBranch }) => {
    return GetItemsFuncsDal({ inBranch });
};

let GetOrdersDeleteFunc = async ({ inBranch }) => {
    let LocalFromDal = await GetOrdersDeleteFuncDal({ inBranch });

    return LocalFromDal;
};

export {
    GetFuncs, GetItemsFuncs,
    GetOrdersDeleteFunc
};