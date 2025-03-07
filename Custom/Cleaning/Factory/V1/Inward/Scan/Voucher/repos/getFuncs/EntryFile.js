import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetAggregateFunc as GetAggregateFuncDal,
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

let GetAggregateFunc = ({ inId }) => {
    return GetAggregateFuncDal({ inId });
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc, GetAggregateFunc
};