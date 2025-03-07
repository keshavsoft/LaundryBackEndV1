import {
    GetFunc as GetFuncDal, ValidateEmailFunc as ValidateEmailFuncDal,
    GetCreateWithUserFunc as GetCreateWithUserFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

let ValidateEmailFunc = ({ inUuid }) => {
    return ValidateEmailFuncDal({ inUuid });
};

let GetCreateWithUserFunc = ({ inUserName }) => {
    return GetCreateWithUserFuncDal({ inUserName });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};
export { GetFunc, ValidateEmailFunc, GetCreateWithUserFunc,GetRowDataFunc };