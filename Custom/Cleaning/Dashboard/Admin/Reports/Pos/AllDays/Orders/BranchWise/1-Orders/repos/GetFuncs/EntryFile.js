import {
	GetAllFuncs as GetAllFuncsDal,
	GetOrderDasboardFunc as GetOrderDasboardFuncDal,
	GetTodayFunc as GetTodayFuncDal,
	GetAllOrdersFunc as GetAllOrdersFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
	return GetAllFuncsDal();
};


let GetOrderDasboardFunc = async () => {
	let LocalFromDal = await GetOrderDasboardFuncDal();

	return LocalFromDal;
};
let GetTodayFunc = async ({ inBranch }) => {
	let LocalFromDal = await GetTodayFuncDal({ inBranch });

	return LocalFromDal;
};

let GetAllOrdersFunc = async ({ inBranch }) => {
	let LocalFromDal = await GetAllOrdersFuncDal({ inBranch });

	return LocalFromDal;
};

export {
	GetFuncs, GetOrderDasboardFunc, GetTodayFunc,
	GetAllOrdersFunc
};