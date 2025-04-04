import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetSummaryFunc as GetSummaryFuncDal,
    GetAsIsFunc as GetAsIsFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetAggregateFunc as GetAggregateFuncDal,
    GetOnlyScanDcFunc as GetOnlyScanDcFuncDal,
    GetQrStatusFilterFunc as GetQrStatusFilterFuncDal

} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetQrStatusFuncDal({ inFactory });
};

let GetSummaryFunc = ({ inFactory }) => {
    return GetSummaryFuncDal({ inFactory });
};

let GetAsIsFunc = ({ inFactory }) => {
    return GetAsIsFuncDal({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

let GetAggregateFunc = ({ inId }) => {
    return GetAggregateFuncDal({ inId });
};

let GetOnlyScanDcFunc = ({ inFactory }) => {
    return GetOnlyScanDcFuncDal({ inFactory });
};

let GetQrStatusFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetQrStatusFilterFuncDal({ inFactory, fromDate, toDate });
};

export {
    GetFunc, GetQrStatusFunc, GetSummaryFunc, GetAsIsFunc, GetRowDataFunc, GetAggregateFunc,GetOnlyScanDcFunc,
    GetQrStatusFilterFunc
};