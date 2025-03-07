import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal,
	GetTodayOrdersFunc as GetTodayOrdersFuncDal,
	GetQrCodesDashBoardFunc as GetQrCodesDashBoardFuncDal,
	GetTodayDashBoardQrCodesFunc as GetTodayDashBoardQrCodesFuncDal,
	GetAllDashBoardQrCodesFunc as GetAllDashBoardQrCodesFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};

let GetTodayOrdersFunc = async () => {
	let LocalFromDal = await GetTodayOrdersFuncDal();

	return LocalFromDal;
};

let GetQrCodesDashBoardFunc = async () => {
	let LocalFromDal = await GetQrCodesDashBoardFuncDal();

	return LocalFromDal;
};

let GetTodayDashBoardQrCodesFunc = async ({inBranch}) => {
	let LocalFromDal = await GetTodayDashBoardQrCodesFuncDal({inBranch});

	return LocalFromDal;
};

let GetAllDashBoardQrCodesFunc = async ({inBranch}) => {
	let LocalFromDal = await GetAllDashBoardQrCodesFuncDal({inBranch});

	return LocalFromDal;
};

export {
    GetFuncs, GetAsIsFuncs,
	GetTodayOrdersFunc,
	GetQrCodesDashBoardFunc,
	GetTodayDashBoardQrCodesFunc,
	GetAllDashBoardQrCodesFunc
};