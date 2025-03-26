import {
    GetFunc as GetFuncDal,
    GetPendingFunc as GetPendingFuncDal,
    GetScannedFunc as GetScannedFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetReturnsFunc as GetReturnsFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
    GetRowCountFunc as GetRowCountFuncDal,
    GetFilterFunc as GetFilterFuncDal,
    GetScannedFilterFunc as GetScannedFilterFuncDal

} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetPendingFunc = ({ inFactory }) => {
    return GetPendingFuncDal({ inFactory });
};

let GetScannedFunc = ({ inFactory }) => {
    return GetScannedFuncDal({ inFactory });
};

let GetReturnsFunc = ({ inFactory }) => {
    return GetReturnsFuncDal({ inFactory });
};

let GetRowDataFunc = ({ inFactory, inId }) => {
    return GetRowDataFuncDal({ inFactory, inId });
};

let GetRowQrDataFunc = ({ inFactory, inId }) => {
    return GetRowQrDataFuncDal({ inFactory, inId });
};

let GetRowCountFunc = ({ inBranch, inId }) => {
    return GetRowCountFuncDal({ inBranch, inId });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetFilterFuncDal({ inFactory, fromDate, toDate });
};

let GetScannedFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetScannedFilterFuncDal({ inFactory, fromDate, toDate });
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc, GetRowQrDataFunc, GetRowCountFunc, GetFilterFunc, GetScannedFilterFunc
};