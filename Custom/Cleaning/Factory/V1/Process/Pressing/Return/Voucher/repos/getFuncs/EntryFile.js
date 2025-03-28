import {
    GetFunc as GetFuncDal,
    GetFilterFunc as GetFilterFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetFilterFuncDal({ inFactory, fromDate, toDate });
};

export {
    GetFunc, GetFilterFunc
};