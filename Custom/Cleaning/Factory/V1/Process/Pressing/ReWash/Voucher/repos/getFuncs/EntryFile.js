import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetFilterFunc as GetFilterFuncDal
    
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

export {
    GetFunc, GetQrStatusFunc, GetFilterFunc
};