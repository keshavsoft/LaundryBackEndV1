import {
    AlterFunc as AlterFuncDal,
} from '../../dals/AlterFuncs/EntryFile.js';

let AlterFunc = ({ inId, inRowData }) => {
    return AlterFuncDal({ inId, inRowData });
};

export {
    AlterFunc
};