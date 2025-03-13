import {
    PostFunc as PostFuncDal,
    PostSettlementFunc as PostSettlementFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inMobileNumber, inBranch,inUserUuId }) => {
    return PostFuncDal({ inMobileNumber, inBranch, inUserUuId });
};

let PostSettlementFunc = ({ inPostBody, inId, inBranch }) => {
    return PostSettlementFuncDal({ inPostBody, inId, inBranch });
};
export { PostFunc, PostSettlementFunc };