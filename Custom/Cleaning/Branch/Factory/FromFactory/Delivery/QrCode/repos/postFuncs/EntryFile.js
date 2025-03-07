import {
    PostFunc as PostFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inFactory, inDataInsert,inQrCodeId }) => {
    return PostFuncDal({ inFactory, inDataInsert,inQrCodeId });
};

export {
    PostFunc
};