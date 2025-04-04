import {
    GetFuncs as GetFuncsDal,
    GetItemsFuncs as GetItemsFuncsDal,
    GetOrdersDeleteFunc as GetOrdersDeleteFuncDal,
    GetBillPrintFunc as GetBillPrintFuncDal,
    GetAllBillPrintFunc as GetAllBillPrintFuncDal
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

let GetBillPrintFunc = async ({ inId,inBranch }) => {
    let LocalFromDal = await GetBillPrintFuncDal({ inId,inBranch });

    return LocalFromDal;
};

let GetAllBillPrintFunc = async ({ inId,inBranch }) => {
    let LocalFromDal = await GetAllBillPrintFuncDal({ inId,inBranch });

    return LocalFromDal;
};
export {
    GetFuncs, GetItemsFuncs,
    GetOrdersDeleteFunc,GetBillPrintFunc,GetAllBillPrintFunc
};