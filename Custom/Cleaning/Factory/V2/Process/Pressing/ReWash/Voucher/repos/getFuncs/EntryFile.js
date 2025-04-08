import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetFilterFunc as GetFilterFuncDal,
    GetTodayFilterFunc as GetTodayFilterFuncDal
    ,
    GetRowDataFunc as GetRowDataFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetQrStatusFuncDal({ inFactory });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetFilterFuncDal({ inFactory, fromDate, toDate });
};

let GetTodayFilterFunc = ({ inFactory }) => {
    return GetTodayFilterFuncDal({ inFactory });
};

let GetRowDataFunc = ({ id }) => {
    let LocalFromDal = GetRowDataFuncDal({ id });

    return LocalFromDal;
};

export {
    GetFunc, GetQrStatusFunc, GetFilterFunc, GetTodayFilterFunc,
    GetRowDataFunc
};