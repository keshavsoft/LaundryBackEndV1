import {
    GetFunc as GetFuncDal,
    GetOrderWithQrFunc as GetOrderWithQrFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetCheckFunc as GetCheckFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inOrderId, inBranch }) => {
    return GetFuncDal({ inOrderId, inBranch });
};

let GetOrderWithQrFunc = ({ inOrderId, inBranch  }) => {
    return GetOrderWithQrFuncDal({ inOrderId, inBranch  });
};


let GetCheckFunc = ({ inOrderId, inBranch }) => {
    return GetCheckFuncDal({ inOrderId, inBranch });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

export {
    GetFunc, GetOrderWithQrFunc, GetRowDataFunc,GetCheckFunc
};