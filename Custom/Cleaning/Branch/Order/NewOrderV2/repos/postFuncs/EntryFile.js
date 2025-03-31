import {
    PostFunc as PostFuncDal,
    PostSettlementFunc as PostSettlementFuncDal,
    SubTableFunc as SubTableFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inMobileNumber, inBranch, inUserName }) => {
    return PostFuncDal({ inMobileNumber, inBranch, inUserName });
};

let PostSettlementFunc = ({ inPostBody, inId, inBranch }) => {
    return PostSettlementFuncDal({ inPostBody, inId, inBranch });
};

let SubTableFunc = ({ inTable, inPostBody, id, inKey }) => {
    return SubTableFuncDal({ inTable, inPostBody, id, inKey });
};

export { PostFunc, PostSettlementFunc, SubTableFunc };