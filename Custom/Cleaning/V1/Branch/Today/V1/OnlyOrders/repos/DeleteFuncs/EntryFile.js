import {
    DeleteFunc as DeleteFuncDal,
} from '../../dals/DeleteFuncs/EntryFile.js';

let DeleteFunc = ({ inId, inBranch }) => {
    return DeleteFuncDal({ inId, inBranch });
};

export {
    DeleteFunc
};