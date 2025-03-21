import {
  GetFunc as GetFuncDal,
  GetOrderShowFunc as GetOrderShowFuncDal,
  GetRowSettlementFunc as GetRowSettlementFuncDal,
  GetInsertOrderFunc as GetInsertOrderFuncDal,
  GetTodayCustomerFilterFunc as GetTodayCustomerFilterFuncDal,
	GetYesterdayCustomerFilterFunc as GetYesterdayCustomerFilterFuncDal,
	GetWeekCustomerFilterFunc as GetWeekCustomerFilterFuncDal,
	GetAllCustomerFilterFunc as GetAllCustomerFilterFuncDal
} from "../../dals/getFuncs/EntryFile.js";

let GetFunc = ({ inBranch }) => {
  return GetFuncDal({ inBranch });
};

let GetOrderShowFunc = ({ inBranch, inRow }) => {
  return GetOrderShowFuncDal({ inBranch, inRow });
};

let GetRowSettlementFunc = ({ inBranch, inRow }) => {
  return GetRowSettlementFuncDal({ inBranch, inRow });
};

let GetInsertOrderFunc = ({ inBranch, inMobile }) => {
  return GetInsertOrderFuncDal({ inBranch, inMobile });
};
let GetTodayCustomerFilterFunc = ({ inBranch, inMobile }) => {
  let LocalFromDal = GetTodayCustomerFilterFuncDal({ inBranch, inMobile });

  return LocalFromDal;
};

let GetYesterdayCustomerFilterFunc = async ({ inBranch, inMobile }) => {
	let LocalFromDal = await GetYesterdayCustomerFilterFuncDal({ inBranch, inMobile });

	return LocalFromDal;
};

let GetWeekCustomerFilterFunc = async ({ inBranch, inMobile }) => {
	let LocalFromDal = await GetWeekCustomerFilterFuncDal({ inBranch, inMobile });

	return LocalFromDal;
};

let GetAllCustomerFilterFunc = async ({ inBranch, inMobile }) => {
	let LocalFromDal = await GetAllCustomerFilterFuncDal({ inBranch, inMobile });

	return LocalFromDal;
};

export {
  GetFunc,
  GetOrderShowFunc,
  GetRowSettlementFunc,
  GetInsertOrderFunc,
  GetTodayCustomerFilterFunc,
	GetYesterdayCustomerFilterFunc,
	GetWeekCustomerFilterFunc,
	GetAllCustomerFilterFunc
};