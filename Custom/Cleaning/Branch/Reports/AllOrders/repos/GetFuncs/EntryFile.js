import {
    GetFuncs as GetFuncsDal,
    GetItemsFuncs as GetItemsFuncsDal
    ,
    GetGetUpComingDeliveryFunc as GetGetUpComingDeliveryFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetItemsFuncs = ({ inBranch }) => {
    return GetItemsFuncsDal({ inBranch });
};

let GetGetUpComingDeliveryFunc = async ({ inBranch, inFromDate, inToDate }) => {
    let LocalFromDal = await GetGetUpComingDeliveryFuncDal({ inBranch, inFromDate, inToDate });

    return LocalFromDal;
};

export {
    GetFuncs, GetItemsFuncs,
    GetGetUpComingDeliveryFunc
};