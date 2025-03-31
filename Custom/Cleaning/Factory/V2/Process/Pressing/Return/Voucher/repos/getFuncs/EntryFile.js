import {
    GetFunc as GetFuncDal,
    GetFilterFunc as GetFilterFuncDal,
    GetTodayFilterFunc as GetTodayFilterFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetFilterFuncDal({ inFactory, fromDate, toDate });
};

let GetTodayFilterFunc = ({ inFactory }) => {
    return GetTodayFilterFuncDal({ inFactory });
};

export {
    GetFunc, GetFilterFunc, GetTodayFilterFunc
};