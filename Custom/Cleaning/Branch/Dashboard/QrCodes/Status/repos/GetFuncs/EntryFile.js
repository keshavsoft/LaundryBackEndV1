import {
    GetAllFuncs as GetAllFuncsDal,
    GetFactoryFuncs as GetFactoryFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetAllFuncsDal({ inBranch });
};

let GetFactoryFuncs = ({ inFactory }) => {
    return GetFactoryFuncsDal({ inFactory });
};

export {
    GetFuncs, GetFactoryFuncs
};