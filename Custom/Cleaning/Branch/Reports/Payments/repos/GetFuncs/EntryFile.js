import {
    GetFuncs as GetFuncsDal,
    GetCashFuncs as GetCashFuncsDal,
    GetCardFuncs as GetCardFuncsDal,
    GetUPIFuncs as GetUPIFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetCashFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetCashFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetCardFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetCardFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetUPIFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetUPIFuncsDal({ inBranch, inFromDate, inToDate });
};

export {
    GetFuncs, GetCashFuncs, GetCardFuncs, GetUPIFuncs
};