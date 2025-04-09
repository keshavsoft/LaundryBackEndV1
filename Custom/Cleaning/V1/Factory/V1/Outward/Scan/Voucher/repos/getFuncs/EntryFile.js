import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
    ,
    GetTodayFunc as GetTodayFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory, fromDate, toDate }) => {
    return GetFuncDal({ inFactory, fromDate, toDate });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetQrStatusFuncDal({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

let GetTodayFunc = ({ inFactory }) => {
    let LocalFromDal = GetTodayFuncDal({ inFactory });

    return LocalFromDal;
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc,
    GetTodayFunc
};