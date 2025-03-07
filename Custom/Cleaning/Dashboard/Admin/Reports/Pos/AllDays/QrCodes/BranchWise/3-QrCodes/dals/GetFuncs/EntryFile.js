import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/TodayAllQrCodes.js';
import { StartFunc as StartFuncFromGetTodayOrders } from '../../kLowDb/ReadFromFile/TodayOrders.js';
import { StartFunc as StartFuncFromGetQrCodesDashBoard } from '../../kLowDb/ReadFromFile/QrCodesDashBoard.js';
import { StartFunc as StartFuncFromGetTodayDashBoardQrCodes } from '../../kLowDb/ReadFromFile/TodayDashBoardQrCodes.js';
import { StartFunc as StartFuncFromGetAllDashBoardQrCodes } from '../../kLowDb/ReadFromFile/AllDashBoardQrCodes.js';

let GetAllFuncs = () => {
    return TodayAllQrCodes();
};

let GetAsIsFuncs = () => {
    return TodayAllQrCodes();
};

let GetTodayOrdersFunc = async () => {
	let LocalFromLowDb = await StartFuncFromGetTodayOrders();

	return await LocalFromLowDb;
};

let GetQrCodesDashBoardFunc = async () => {
	let LocalFromLowDb = await StartFuncFromGetQrCodesDashBoard();

	return await LocalFromLowDb;
};

let GetTodayDashBoardQrCodesFunc = async ({inBranch}) => {
	let LocalFromLowDb = await StartFuncFromGetTodayDashBoardQrCodes({inBranch});

	return await LocalFromLowDb;
};

let GetAllDashBoardQrCodesFunc = async ({inBranch}) => {
	let LocalFromLowDb = await StartFuncFromGetAllDashBoardQrCodes({inBranch});

	return await LocalFromLowDb;
};

export {
    GetAllFuncs, GetAsIsFuncs,
	GetTodayOrdersFunc,
	GetQrCodesDashBoardFunc,
	GetTodayDashBoardQrCodesFunc,
	GetAllDashBoardQrCodesFunc
};