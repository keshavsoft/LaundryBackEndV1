import {
    GetFuncs as GetFuncsDal,
    GetToScanFuncs as GetToScanFuncsDal,
    GetSentAndFactoryScanFuncs as GetSentAndFactoryScanFuncsDal,
    GetEntryReturnFuncs as GetEntryReturnFuncsDal,
    GetProcessReturnFuncs as GetProcessReturnFuncsDal,
    GetCompletionReturnFuncs as GetCompletionReturnFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetToScanFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetToScanFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetSentAndFactoryScanFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetSentAndFactoryScanFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetEntryReturnFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetEntryReturnFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetProcessReturnFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetProcessReturnFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetCompletionReturnFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetCompletionReturnFuncsDal({ inBranch, inFromDate, inToDate });
};

export {
    GetFuncs, GetToScanFuncs, GetSentAndFactoryScanFuncs, GetEntryReturnFuncs, GetProcessReturnFuncs, GetCompletionReturnFuncs
};
