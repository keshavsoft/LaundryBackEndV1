import { StartFunc as MaxRow } from "../../kLowDb/ReadFile/MaxRow.js";
import { StartFunc as inRowOrder } from "../../kLowDb/ReadFile/inRow.js";
import { StartFunc as Settelment } from "../../kLowDb/ReadFile/Settelment.js";
import { StartFunc as InsertOrderWithChecking } from "../../kLowDb/EntryScan/WithChecking/StartFunc.js";
import { StartFunc as StartFuncFromGetTodayCustomerFilter } from "../../kLowDb/ReadFile/TodayCustomerOrders.js";
import { StartFunc as StartFuncFromGetYesterdayCustomerFilter } from '../../kLowDb/ReadFile/YesterdayCustomerFilter.js';
import { StartFunc as StartFuncFromGetWeekCustomerFilter } from '../../kLowDb/ReadFile/WeekCustomerFilter.js';
import { StartFunc as StartFuncFromGetAllCustomerFilter } from '../../kLowDb/ReadFile/AllCustomerFilter.js';

let GetFunc = ({ inBranch }) => {
  let LocalFromLowDb = MaxRow({ inBranch });

  return LocalFromLowDb;
};

let GetOrderShowFunc = ({ inBranch, inRow }) => {
  let LocalFromLowDb = inRowOrder({ inBranch, inRow });

  return LocalFromLowDb;
};

let GetRowSettlementFunc = ({ inBranch, inRow }) => {
  let LocalFromLowDb = Settelment({ inBranch, inRow });

  return LocalFromLowDb;
};

let GetInsertOrderFunc = ({ inBranch, inMobile }) => {
  let LocalFromLowDb = InsertOrderWithChecking({ inBranch, inMobile });

  return LocalFromLowDb;
};
let GetTodayCustomerFilterFunc = ({ inBranch, inMobile }) => {
  let LocalFromLowDb = StartFuncFromGetTodayCustomerFilter({
    inBranch,
    inMobile,
  });

  return LocalFromLowDb;
};

let GetYesterdayCustomerFilterFunc = async ({ inBranch, inMobile }) => {
	let LocalFromLowDb = await StartFuncFromGetYesterdayCustomerFilter({ inBranch, inMobile });

	return await LocalFromLowDb;
};

let GetWeekCustomerFilterFunc = async ({ inBranch, inMobile }) => {
	let LocalFromLowDb = await StartFuncFromGetWeekCustomerFilter({ inBranch, inMobile });

	return await LocalFromLowDb;
};

let GetAllCustomerFilterFunc = async ({ inBranch, inMobile }) => {
	let LocalFromLowDb = await StartFuncFromGetAllCustomerFilter({ inBranch, inMobile });

	return await LocalFromLowDb;
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