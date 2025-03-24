import {
    GetFunc as GetFuncDal,
    GetPendingFunc as GetPendingFuncDal,
    GetScannedFunc as GetScannedFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
    GetFromFactoryDcWiseItems as GetFromFactoryDcWiseItemsDal,
    GetToScanPendingFunc as GetToScanPendingFuncDal,
    GetAllFilterFunc as GetAllFilterFuncDal,
    GetScannedFilterFunc as GetScannedFilterFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inBranch }) => {
    return GetFuncDal({ inBranch });
};

let GetAllFilterFunc = ({ inBranch, fromDate, toDate }) => {
    return GetAllFilterFuncDal({ inBranch, fromDate, toDate });
};
let GetScannedFunc = ({ inBranch }) => {
    return GetScannedFuncDal({ inBranch });
};

let GetScannedFilterFunc = ({ inBranch, fromDate, toDate }) => {
    return GetScannedFilterFuncDal({ inBranch, fromDate, toDate });
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
export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetRowQrDataFunc,
    GetFromFactoryDcWiseItems, GetToScanPendingFunc, GetAllFilterFunc,GetScannedFilterFunc
};