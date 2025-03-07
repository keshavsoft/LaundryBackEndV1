import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal,
    GetWithRowsFuncs as GetWithRowsFuncsDal,
    GetOrderDasboardFunc as GetOrderDasboardFuncDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};

let GetWithRowsFuncs = () => {
    return GetWithRowsFuncsDal();
};

let GetOrderDasboardFunc = () => {
    return GetOrderDasboardFuncDal();
};

export {
    GetFuncs, GetAsIsFuncs, GetWithRowsFuncs, GetOrderDasboardFunc
};