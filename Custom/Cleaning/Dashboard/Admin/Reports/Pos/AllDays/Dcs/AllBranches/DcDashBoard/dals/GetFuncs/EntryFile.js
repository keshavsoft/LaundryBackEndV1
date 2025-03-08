import { StartFunc as TodayAllDcs } from '../../kLowDb/ReadFromFile/DcsDashBoard.js';
import { StartFunc as StartFuncFromGetAllDcs } from '../../kLowDb/ReadFromFile/AllDcs.js';
import { StartFunc as StartFuncFromGetTodayDcs } from '../../kLowDb/ReadFromFile/TodayDcs.js';
import { StartFunc as StartFuncFromGetAllBranchScanned } from '../../kLowDb/ReadFromFile/AllBranchScanned.js';
import { StartFunc as StartFuncFromGetAllFactoryPending } from '../../kLowDb/ReadFromFile/AllFactoryPending.js';
import { StartFunc as StartFuncFromGetAllFactoryScanned } from '../../kLowDb/ReadFromFile/AllFactoryScanned.js';
import { StartFunc as StartFuncFromGetTodayBranchScanned } from '../../kLowDb/ReadFromFile/TodayBranchScannedEntryFile.js';
import { StartFunc as StartFuncFromGetTodayFactoryPending } from '../../kLowDb/ReadFromFile/TodayFactoryPendingEntryFile.js';
import { StartFunc as StartFuncFromGetTodayFactoryScanned } from '../../kLowDb/ReadFromFile/TodayFactoryScannedEntryFile.js';

let GetAllFuncs = () => {
	return TodayAllDcs();
};

let GetAllDcsFunc = async ({ inBranch }) => {
	let LocalFromLowDb = await StartFuncFromGetAllDcs({ inBranch });

	return await LocalFromLowDb;
};

let GetTodayDcsFunc = async ({ inBranch }) => {
	let LocalFromLowDb = await StartFuncFromGetTodayDcs({ inBranch });

	return await LocalFromLowDb;
};

let GetAllBranchScannedFunc = async ({ inBranch, inId }) => {
	let LocalFromLowDb = await StartFuncFromGetAllBranchScanned({ inBranch, inId });

	return await LocalFromLowDb;
};

let GetAllFactoryPendingFunc = async ({ inFactory, inId }) => {
	let LocalFromLowDb = await StartFuncFromGetAllFactoryPending({ inFactory, inId });

	return await LocalFromLowDb;
};

let GetAllFactoryScannedFunc = async ({ inFactory, inId }) => {
	let LocalFromLowDb = await StartFuncFromGetAllFactoryScanned({ inFactory, inId });

	return await LocalFromLowDb;
};

let GetTodayBranchScannedFunc = async ({ inBranch, inId }) => {
	let LocalFromLowDb = await StartFuncFromGetTodayBranchScanned({ inBranch, inId });

	return await LocalFromLowDb;
};

let GetTodayFactoryPendingFunc = async ({ inFactory, inId }) => {
	let LocalFromLowDb = await StartFuncFromGetTodayFactoryPending({ inFactory, inId });

	return await LocalFromLowDb;
};

let GetTodayFactoryScannedFunc = async ({ inFactory, inId }) => {
	let LocalFromLowDb = await StartFuncFromGetTodayFactoryScanned({ inFactory, inId });

	return await LocalFromLowDb;
};

export {
	GetAllFuncs, GetAllDcsFunc, GetTodayDcsFunc, GetAllBranchScannedFunc, GetAllFactoryPendingFunc,
	GetAllFactoryScannedFunc, GetTodayBranchScannedFunc,
	GetTodayFactoryPendingFunc,
	GetTodayFactoryScannedFunc
};