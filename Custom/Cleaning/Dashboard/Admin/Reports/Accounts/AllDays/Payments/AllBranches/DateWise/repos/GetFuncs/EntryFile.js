import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal,
	GetCashFunc as GetCashFuncDal,
	GetCardFunc as GetCardFuncDal,
	GetUpiFunc as GetUpiFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return GetAllFuncsDal({ inBranch, inFromDate, inToDate });
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};


let GetCashFunc = async ({inBranch, inFromDate, inToDate}) => {
	let LocalFromDal = await GetCashFuncDal({inBranch, inFromDate, inToDate});

	return LocalFromDal;
};

let GetCardFunc = async ({inBranch, inFromDate, inToDate}) => {
	let LocalFromDal = await GetCardFuncDal({inBranch, inFromDate, inToDate});

	return LocalFromDal;
};

let GetUpiFunc = async ({inBranch, inFromDate, inToDate}) => {
	let LocalFromDal = await GetUpiFuncDal({inBranch, inFromDate, inToDate});

	return LocalFromDal;
};
export {
    GetFuncs, GetAsIsFuncs,
	GetCashFunc,
	GetCardFunc,
	GetUpiFunc
};