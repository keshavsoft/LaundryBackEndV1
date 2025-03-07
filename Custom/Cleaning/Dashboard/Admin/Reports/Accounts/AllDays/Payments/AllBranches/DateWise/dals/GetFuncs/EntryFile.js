import { StartFunc as BranchWise } from '../../kLowDb/ReadFromFile/AllPayment.js';
import { StartFunc as StartFuncFromGetCash } from '../../kLowDb/ReadFromFile/GetCashFunc.js';
import { StartFunc as StartFuncFromGetCard } from '../../kLowDb/ReadFromFile/GetCardFunc.js';
import { StartFunc as StartFuncFromGetUpi } from '../../kLowDb/ReadFromFile/GetUpiFunc.js';

let GetAllFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return BranchWise({ inBranch, inFromDate, inToDate });
};

let GetAsIsFuncs = () => {
    // return TodayAllQrCodes();
};


let GetCashFunc = async ({inBranch, inFromDate, inToDate}) => {
	let LocalFromLowDb = await StartFuncFromGetCash({inBranch, inFromDate, inToDate});

	return await LocalFromLowDb;
};

let GetCardFunc = async ({inBranch, inFromDate, inToDate}) => {
	let LocalFromLowDb = await StartFuncFromGetCard({inBranch, inFromDate, inToDate});

	return await LocalFromLowDb;
};

let GetUpiFunc = async ({inBranch, inFromDate, inToDate}) => {
	let LocalFromLowDb = await StartFuncFromGetUpi({inBranch, inFromDate, inToDate});

	return await LocalFromLowDb;
};
export {
    GetAllFuncs, GetAsIsFuncs,
	GetCashFunc,
	GetCardFunc,
	GetUpiFunc
};