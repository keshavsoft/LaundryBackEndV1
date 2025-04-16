import {
    DeleteFunc as DeleteFuncDal,
} from '../../dals/DeleteFuncs/EntryFile.js';

let DeleteFunc = ({ inId }) => {
    return DeleteFuncDal({ inId });
};

export {
    DeleteFunc
};