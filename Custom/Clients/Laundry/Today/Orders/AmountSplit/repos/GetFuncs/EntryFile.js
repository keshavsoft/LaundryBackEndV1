import {
    GetFuncs as GetFuncsDal,
    GetCardFuncs as GetCardFuncsDal,
    GetUpiFuncs as GetUpiFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetCardFuncs = ({ inBranch }) => {
    return GetCardFuncsDal({ inBranch });
};

let GetUpiFuncs = ({ inBranch }) => {
    return GetUpiFuncsDal({ inBranch });
};

export {
    GetFuncs,GetCardFuncs,GetUpiFuncs
};