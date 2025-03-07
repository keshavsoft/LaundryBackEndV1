import { StartFunc as TodayAllDcs } from '../../kLowDb/ReadFromFile/DcsDashBoard.js';
import { StartFunc as StartFuncFromGetAllDcs } from '../../kLowDb/ReadFromFile/AllDcs.js';
import { StartFunc as StartFuncFromGetTodayDcs } from '../../kLowDb/ReadFromFile/TodayDcs.js';

let GetAllFuncs = () => {
    return TodayAllDcs();
};

let GetAllDcsFunc = async ({inBranch}) => {
	let LocalFromLowDb = await StartFuncFromGetAllDcs({inBranch});

	return await LocalFromLowDb;
};

let GetTodayDcsFunc = async ({inBranch}) => {
	let LocalFromLowDb = await StartFuncFromGetTodayDcs({inBranch});

	return await LocalFromLowDb;
};

export {
    GetAllFuncs,
	GetAllDcsFunc,
	GetTodayDcsFunc
};