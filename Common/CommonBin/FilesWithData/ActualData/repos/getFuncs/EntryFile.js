import { GetFunc as GetFuncDal, GetRowWithDataFunc as GetRowWithDataFuncFromDal } from '../../dals/getFuncs/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

let GetRowWithDataFunc = () => {
    return GetRowWithDataFuncFromDal();
};

export { GetFunc, GetRowWithDataFunc };