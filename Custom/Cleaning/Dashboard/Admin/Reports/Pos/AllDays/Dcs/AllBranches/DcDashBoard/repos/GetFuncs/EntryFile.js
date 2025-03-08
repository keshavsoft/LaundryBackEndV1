import {
	GetAllFuncs as GetAllFuncsDal,
	GetAllDcsFunc as GetAllDcsFuncDal,
	GetTodayDcsFunc as GetTodayDcsFuncDal,
	GetAllBranchScannedFunc as GetAllBranchScannedFuncDal,
	GetAllFactoryPendingFunc as GetAllFactoryPendingFuncDal,
	GetAllFactoryScannedFunc as GetAllFactoryScannedFuncDal,
	GetTodayBranchScannedFunc as GetTodayBranchScannedFuncDal,
	GetTodayFactoryPendingFunc as GetTodayFactoryPendingFuncDal,
	GetTodayFactoryScannedFunc as GetTodayFactoryScannedFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
	return GetAllFuncsDal();
};


let GetAllDcsFunc = async ({ inBranch }) => {
	let LocalFromDal = await GetAllDcsFuncDal({ inBranch });

	return LocalFromDal;
};

let GetTodayDcsFunc = async ({ inBranch }) => {
	let LocalFromDal = await GetTodayDcsFuncDal({ inBranch });

	return LocalFromDal;
};

let GetAllBranchScannedFunc = async ({ inBranch, inId }) => {
	let LocalFromDal = await GetAllBranchScannedFuncDal({ inBranch, inId });

	return LocalFromDal;
};

let GetAllFactoryPendingFunc = async ({ inFactory, inId }) => {
	let LocalFromDal = await GetAllFactoryPendingFuncDal({ inFactory, inId });

	return LocalFromDal;
};

let GetAllFactoryScannedFunc = async ({ inFactory, inId }) => {
	let LocalFromDal = await GetAllFactoryScannedFuncDal({ inFactory, inId });

	return LocalFromDal;
};

let GetTodayBranchScannedFunc = async ({ inBranch, inId }) => {
	let LocalFromDal = await GetTodayBranchScannedFuncDal({ inBranch, inId });

	return LocalFromDal;
};

let GetTodayFactoryPendingFunc = async ({ inFactory, inId }) => {
	let LocalFromDal = await GetTodayFactoryPendingFuncDal({ inFactory, inId });

	return LocalFromDal;
};

let GetTodayFactoryScannedFunc = async ({ inFactory, inId }) => {
	let LocalFromDal = await GetTodayFactoryScannedFuncDal({ inFactory, inId });

	return LocalFromDal;
};

export {
	GetFuncs, GetAllDcsFunc, GetTodayDcsFunc, GetAllBranchScannedFunc, GetAllFactoryPendingFunc,
	GetAllFactoryScannedFunc, GetTodayBranchScannedFunc,
	GetTodayFactoryPendingFunc,
	GetTodayFactoryScannedFunc
};