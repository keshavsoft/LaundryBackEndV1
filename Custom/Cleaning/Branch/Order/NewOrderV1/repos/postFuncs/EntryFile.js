import {
    PostFunc as PostFuncDal,
    PostSettlementFunc as PostSettlementFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inCustomerName, inMobileNumber, inBranch, inPostBody }) => {
    return PostFuncDal({ inCustomerName, inMobileNumber, inBranch, inPostBody });
};

let PostSettlementFunc = ({ inPostBody, inId, inBranch }) => {
    return PostSettlementFuncDal({ inPostBody, inId, inBranch });
};
export { PostFunc, PostSettlementFunc };