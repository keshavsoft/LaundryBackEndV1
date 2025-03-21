import {
    PostFunc as PostFuncDal,
    PostSettlementFunc as PostSettlementFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inMobileNumber, inBranch,inUserName }) => {
    return PostFuncDal({ inMobileNumber, inBranch, inUserName });
};

let PostSettlementFunc = ({ inPostBody, inId, inBranch }) => {
    return PostSettlementFuncDal({ inPostBody, inId, inBranch });
};

export { PostFunc, PostSettlementFunc };