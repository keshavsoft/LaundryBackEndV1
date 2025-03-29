import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetFilterFunc as GetFilterFuncDal,
    GetTodayFilterFunc as GetTodayFilterFuncDal

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

export {
    GetFunc, GetQrStatusFunc, GetFilterFunc, GetTodayFilterFunc
};