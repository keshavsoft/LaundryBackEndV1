import {
    GetFunc as GetFuncDal,
    GetPendingFunc as GetPendingFuncDal,
    GetScannedFunc as GetScannedFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetReturnsFunc as GetReturnsFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
    GetRowCountFunc as GetRowCountFuncDal,
    GetFromBranchDcWiseItemsFunc as GetFromBranchDcWiseItemsFuncDal,
    GetToScanPendingFunc as GetToScanPendingFuncDal,
    GetDCQrReturnFunc as GetDCQrReturnFuncDal,
    GetAggregateFunc as GetAggregateFuncDal,
    GetFilterFunc as GetFilterFuncDal,
    GetScannedFilterFunc as GetScannedFilterFuncDal,
    GetInWashingFunc as GetInWashingFuncDal
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
let GetFromBranchDcWiseItemsFunc = ({ inFactory, inId }) => {
    return GetFromBranchDcWiseItemsFuncDal({ inFactory, inId });
};

let GetToScanPendingFunc = ({ inFactory, inId }) => {
    return GetToScanPendingFuncDal({ inFactory, inId });
};

let GetDCQrReturnFunc = ({ inFactory, inId }) => {
    return GetDCQrReturnFuncDal({ inFactory, inId });
};

let GetAggregateFunc = ({ inFactory }) => {
    return GetAggregateFuncDal({ inFactory });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetFilterFuncDal({ inFactory, fromDate, toDate });
};

let GetScannedFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetScannedFilterFuncDal({ inFactory, fromDate, toDate });
};
let GetInWashingFunc = ({ inFactory, fromDate, toDate }) => {
    let LocalFromDal = GetInWashingFuncDal({ inFactory, fromDate, toDate });

    return LocalFromDal;
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc, GetRowQrDataFunc, GetRowCountFunc,
    GetFromBranchDcWiseItemsFunc, GetToScanPendingFunc, GetDCQrReturnFunc, GetAggregateFunc, GetFilterFunc,
    GetScannedFilterFunc,
    GetInWashingFunc
};