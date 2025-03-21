import {
    mainTableDeleteFunc as mainTableDeleteFuncDal,
    addOnTableDeleteFunc as addOnTableDeleteFuncDal,
} from '../../dals/DeleteFuncs/EntryFile.js';

let mainTableDeleteFunc = ({ inId, inSubId, inBranch }) => {
    return mainTableDeleteFuncDal({ inId, inSubId, inBranch });
};

let addOnTableDeleteFunc = ({ inId, inBranch, inmainId, AddOnKey }) => {
    return addOnTableDeleteFuncDal({ inId, inBranch, inmainId, AddOnKey });
};

export {
    mainTableDeleteFunc, addOnTableDeleteFunc
};