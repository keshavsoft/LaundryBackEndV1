import {
  GetFunc as GetFuncDal,
  GetOrderShowFunc as GetOrderShowFuncDal,
  GetRowSettlementFunc as GetRowSettlementFuncDal,
  GetInsertOrderFunc as GetInsertOrderFuncDal,
  GetTodayCustomerFilterFunc as GetTodayCustomerFilterFuncDal,
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

export {
  GetFunc,
  GetOrderShowFunc,
  GetRowSettlementFunc,
  GetInsertOrderFunc,
  GetTodayCustomerFilterFunc,
};
