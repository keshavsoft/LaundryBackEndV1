import {
    GetFunc as GetFuncDal,
    GetOrderShowFunc as GetOrderShowFuncDal,
    GetRowSettlementFunc as GetRowSettlementFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inBranch }) => {
    return GetFuncDal({ inBranch });
};

let GetOrderShowFunc = ({ inBranch, inRow }) => {
    return GetOrderShowFuncDal({ inBranch, inRow });
};

let GetRowSettlementFunc = ({ inBranch, inRow }) => {
    return GetRowSettlementFuncDal({ inBranch, inRow });
};
export { GetFunc, GetOrderShowFunc,GetRowSettlementFunc };