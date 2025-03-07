import {
    GetAllFuncs as GetAllFuncsDal,
	GetAllDcsFunc as GetAllDcsFuncDal,
	GetTodayDcsFunc as GetTodayDcsFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};


let GetAllDcsFunc = async ({inBranch}) => {
	let LocalFromDal = await GetAllDcsFuncDal({inBranch});

	return LocalFromDal;
};

let GetTodayDcsFunc = async ({inBranch}) => {
	let LocalFromDal = await GetTodayDcsFuncDal({inBranch});

	return LocalFromDal;
};

export {
    GetFuncs,
	GetAllDcsFunc,
	GetTodayDcsFunc
};