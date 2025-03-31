import {
    GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetFilterFunc as GetFilterFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetDataOnlyFunc = () => {
    return GetDataOnlyFuncDal();
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

let GetFilterFunc = ({ inFilterKey, inFilterValue }) => {
    return GetFilterFuncDal({ inFilterKey, inFilterValue });
};
export {
    GetDataOnlyFunc, GetRowDataFunc,
    GetFilterFunc
};