import {
	GetNoSettlementFunc as GetNoSettlementFuncDal,
	GetItemsOnlyFunc as GetItemsOnlyFuncDal,
	GetOrderFromToDateFunc as GetOrderFromToDateFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetNoSettlementFunc = ({ inBranch }) => {
	let LocalFromDal = GetNoSettlementFuncDal({ inBranch });

	return LocalFromDal;
};

let GetItemsOnlyFunc = ({ inBranch, inFromDate, inToDate }) => {
	let LocalFromDal = GetItemsOnlyFuncDal({ inBranch, inFromDate, inToDate });

	return LocalFromDal;
};

let GetOrderFromToDateFunc = ({ inBranch, inFromDate, inToDate }) => {
	let LocalFromDal = GetOrderFromToDateFuncDal({ inBranch, inFromDate, inToDate });

	return LocalFromDal;
};

export {
	GetNoSettlementFunc,
	GetItemsOnlyFunc,
	GetOrderFromToDateFunc
};