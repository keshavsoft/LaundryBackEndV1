import {
    GetAllFuncs as GetAllFuncsDal,
    GetPendingFuncs as GetPendingFuncsDal,
    GetScannedFuncs as GetScannedFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetAllFuncs = ({ inBranch,inFromDate, inToDate }) => {
    return GetAllFuncsDal({ inBranch,inFromDate, inToDate });
};

let GetPendingFuncs = ({ inBranch,inFromDate, inToDate }) => {
    return GetPendingFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetScannedFuncs = ({ inBranch,inFromDate, inToDate}) => {
    return GetScannedFuncsDal({ inBranch,inFromDate, inToDate });
};

export {
    GetAllFuncs, GetPendingFuncs, GetScannedFuncs
};