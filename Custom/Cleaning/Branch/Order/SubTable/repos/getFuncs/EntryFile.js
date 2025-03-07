import {
    GetFunc as GetFuncDal,
    GetOrderShowFunc as GetOrderShowFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inRow, inId, inBranch }) => {
    return GetFuncDal({ inRow, inId, inBranch });
};

let GetOrderShowFunc = ({ inBranch, inRow }) => {
    return GetOrderShowFuncDal({ inBranch, inRow });
};

export { GetFunc, GetOrderShowFunc };