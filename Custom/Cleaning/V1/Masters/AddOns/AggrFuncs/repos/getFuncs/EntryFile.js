import {
    GetCountFunc as GetCountFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetCountFunc = () => {
    let LocalFromDal = GetCountFuncDal();

    return LocalFromDal;
};

export {
    GetCountFunc
};