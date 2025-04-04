import {
    GetFuncs as GetFuncsDal,
    GetOrdersDeleteFunc as GetOrdersDeleteFuncDal
,
	GetAllItemsFunc as GetAllItemsFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetOrdersDeleteFunc = async ({ inBranch }) => {
    let LocalFromDal = await GetOrdersDeleteFuncDal({ inBranch });

    return LocalFromDal;
};

let GetAllItemsFunc = async ({ inBranch, inFromDate, inToDate }) => {
	let LocalFromDal = await GetAllItemsFuncDal({ inBranch, inFromDate, inToDate });

	return LocalFromDal;
};

export {
    GetFuncs, GetOrdersDeleteFunc,
	GetAllItemsFunc
};