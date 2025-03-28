import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetFilterFunc as GetFilterFuncDal
    
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetQrStatusFuncDal({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return GetFilterFuncDal({ inFactory, fromDate, toDate });
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc,GetFilterFunc
};