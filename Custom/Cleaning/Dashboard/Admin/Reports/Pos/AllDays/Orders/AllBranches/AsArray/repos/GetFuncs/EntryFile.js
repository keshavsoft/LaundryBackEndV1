import {
    GetAllFuncs as GetAllFuncsDal,
    GetSimpleFuncs as GetSimpleFuncsDal,
    GetItemCountFuncs as GetItemCountFuncsDal,
    GetIsSettledFuncs as GetIsSettledFuncsDal,
    GetWithSettlementFuncs as GetWithSettlementFuncsDal,
    GetWithDeliveryFuncs as GetWithDeliveryFuncsDal,
    GetSortByDateLatestFunc as GetSortByDateLatestFuncDal,
    GetSortByDateOldestFunc as GetSortByDateOldestFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let GetSimpleFuncs = () => {
    return GetSimpleFuncsDal();
};

let GetItemCountFuncs = () => {
    return GetItemCountFuncsDal();
};

let GetIsSettledFuncs = () => {
    return GetIsSettledFuncsDal();
};

let GetWithSettlementFuncs = () => {
    return GetWithSettlementFuncsDal();
};

let GetWithDeliveryFuncs = () => {
    return GetWithDeliveryFuncsDal();
};

let GetSortByDateLatestFunc = async () => {
    let LocalFromDal = await GetSortByDateLatestFuncDal();

    return LocalFromDal;
};

let GetSortByDateOldestFunc = async () => {
    let LocalFromDal = await GetSortByDateOldestFuncDal();

    return LocalFromDal;
};

export {
    GetFuncs, GetSimpleFuncs, GetItemCountFuncs, GetIsSettledFuncs,
    GetWithSettlementFuncs, GetWithDeliveryFuncs,
    GetSortByDateLatestFunc,
    GetSortByDateOldestFunc
};