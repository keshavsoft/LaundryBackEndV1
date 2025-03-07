import {
    PostFunc as PostFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inBranch, inDataInsert,inQrCodeId,inVoucher }) => {
    return PostFuncDal({ inBranch, inDataInsert,inQrCodeId,inVoucher });
};

export {
    PostFunc
};