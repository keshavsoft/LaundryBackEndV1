import {
    GetFunc as GetFuncDal,
    GetPendingFunc as GetPendingFuncDal,
    GetScannedFunc as GetScannedFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
    GetFromFactoryDcWiseItems as GetFromFactoryDcWiseItemsDal,
    GetToScanPendingFunc as GetToScanPendingFuncDal,
    GetAllFunc as GetAllFuncDal,
    GetScannedWithOutFilterFunc as GetScannedWithOutFilterFuncDal

} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inBranch, fromDate, toDate }) => {
    return GetFuncDal({ inBranch, fromDate, toDate });
};

let GetScannedFunc = ({ inBranch, fromDate, toDate }) => {
    return GetScannedFuncDal({ inBranch, fromDate, toDate });
};

let GetPendingFunc = ({ inBranch }) => {
    return GetPendingFuncDal({ inBranch });
};

let GetRowDataFunc = ({ inBranch, inId }) => {
    return GetRowDataFuncDal({ inBranch, inId });
};

let GetRowQrDataFunc = ({ inId }) => {
    return GetRowQrDataFuncDal({ inId });
};

let GetFromFactoryDcWiseItems = ({ inBranch, inId }) => {
    return GetFromFactoryDcWiseItemsDal({ inBranch, inId });
};

let GetToScanPendingFunc = ({ inBranch, inId }) => {
    return GetToScanPendingFuncDal({ inBranch, inId });
};

let GetAllFunc = ({ inBranch }) => {
    return GetAllFuncDal({ inBranch });
};

let GetScannedWithOutFilterFunc = ({ inBranch }) => {
    return GetScannedWithOutFilterFuncDal({ inBranch });
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetRowQrDataFunc,
    GetFromFactoryDcWiseItems, GetToScanPendingFunc, GetAllFunc,GetScannedWithOutFilterFunc
};