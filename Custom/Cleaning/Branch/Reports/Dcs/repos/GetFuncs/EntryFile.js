import {
    GetFuncs as GetFuncsDal,
    GetToScanFuncs as GetToScanFuncsDal,
    GetSentAndFactoryScanFuncs as GetSentAndFactoryScanFuncsDal

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

export {
    GetFuncs, GetToScanFuncs, GetSentAndFactoryScanFuncs
};