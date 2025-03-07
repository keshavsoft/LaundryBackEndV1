import {
    GetFuncs as GetFuncsDal,
    GetCashFuncs as GetCashFuncsDal,
    GetCardFuncs as GetCardFuncsDal,
    GetUpiFuncs as GetUpiFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetCashFuncs = ({ inBranch }) => {
    return GetCashFuncsDal({ inBranch });
};

let GetCardFuncs = ({ inBranch }) => {
    return GetCardFuncsDal({ inBranch });
};

let GetUpiFuncs = ({ inBranch }) => {
    return GetUpiFuncsDal({ inBranch });
};

export {
    GetFuncs, GetCashFuncs, GetCardFuncs, GetUpiFuncs
};