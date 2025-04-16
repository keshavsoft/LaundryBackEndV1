import {
    GetAllFuncs as GetAllFuncsDal,
    GetInBranchFuncs as GetInBranchFuncsDal,
    GetToFactoryFuncs as GetToFactoryFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetAllFuncs = ({ inBranch,inFromDate, inToDate }) => {
    return GetAllFuncsDal({ inBranch,inFromDate, inToDate });
};

let GetInBranchFuncs = ({ inBranch,inFromDate, inToDate }) => {
    return GetInBranchFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetToFactoryFuncs = ({ inBranch,inFromDate, inToDate}) => {
    return GetToFactoryFuncsDal({ inBranch,inFromDate, inToDate });
};

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
};