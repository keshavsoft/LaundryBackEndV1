import {
    GetFuncs as GetFuncsDal,
    GetItemsFuncs as GetItemsFuncsDal,
    GetBillPrintFunc as GetBillPrintFuncDal,
    GetNoSettlementFunc as GetNoSettlementFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetItemsFuncs = ({ inBranch }) => {
    return GetItemsFuncsDal({ inBranch });
};

let GetBillPrintFunc = async ({ inId, inBranch }) => {
    let LocalFromDal = await GetBillPrintFuncDal({ inId, inBranch });

    return LocalFromDal;
};

let GetNoSettlementFunc = ({ inBranch }) => {
    let LocalFromDal = GetNoSettlementFuncDal({ inBranch });

    return LocalFromDal;
};

export {
    GetFuncs, GetItemsFuncs,
    GetBillPrintFunc,
    GetNoSettlementFunc
};