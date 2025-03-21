import {
  GetFunc as GetFuncRepo,
  GetOrderShowFunc as GetOrderShowFuncRepo,
  GetRowSettlementFunc as GetRowSettlementFuncRepo,
  GetInsertOrderFunc as GetInsertOrderFuncRepo,
  GetTodayCustomerFilterFunc as GetTodayCustomerFilterFuncRepo,
  GetYesterdayCustomerFilterFunc as GetYesterdayCustomerFilterFuncRepo,
  GetWeekCustomerFilterFunc as GetWeekCustomerFilterFuncRepo,
  GetAllCustomerFilterFunc as GetAllCustomerFilterFuncRepo
} from "../../repos/getFuncs/EntryFile.js";

let GetFunc = (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;

  let LocalFromRepo = GetFuncRepo({ inBranch: LocalBranch });

  if (LocalFromRepo.KTF === false) res.status(500).send(LocalFromRepo.KReason);

  res.status(200).json(LocalFromRepo.JsonData);
};

let GetOrderShowFunc = (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;
  let LocalRowPk = LocalParams.inRow;

  let LocalFromRepo = GetOrderShowFuncRepo({
    inBranch: LocalBranch,
    inRow: LocalRowPk,
  });

  if (LocalFromRepo.KTF === false) res.status(500).send(LocalFromRepo.KReason);

  res.status(200).json(LocalFromRepo.JsonData);
};

let GetRowSettlementFunc = (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;
  let LocalRowPk = LocalParams.inRow;

  let LocalFromRepo = GetRowSettlementFuncRepo({
    inBranch: LocalBranch,
    inRow: LocalRowPk,
  });

  if (LocalFromRepo.KTF === false) res.status(500).send(LocalFromRepo.KReason);

  res.status(200).json(LocalFromRepo.JsonData);
};

let GetInsertOrderFunc = (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;
  let LocalMobile = LocalParams.inMobile;

  let LocalFromRepo = GetInsertOrderFuncRepo({
    inBranch: LocalBranch,
    inMobile: LocalMobile,
  });

  if (LocalFromRepo.KTF === false) res.status(500).send(LocalFromRepo.KReason);

  res.status(200).json(LocalFromRepo.JsonData);
};

let GetTodayCustomerFilterFunc = (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;
  let LocalMobile = LocalParams.inMobile;
  let LocalFromRepo = GetTodayCustomerFilterFuncRepo({
    inBranch: LocalBranch,
    inMobile: LocalMobile,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo);
    return;
  }

  res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

let GetYesterdayCustomerFilterFunc = async (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;
  let LocalMobile = LocalParams.inMobile;
  let LocalFromRepo = await GetYesterdayCustomerFilterFuncRepo({
    inBranch: LocalBranch,
    inMobile: LocalMobile,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo);
    return;
  };

  res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

let GetWeekCustomerFilterFunc = async (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;
  let LocalMobile = LocalParams.inMobile;
  let LocalFromRepo = await GetWeekCustomerFilterFuncRepo({
    inBranch: LocalBranch,
    inMobile: LocalMobile,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo);
    return;
  };

  res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

let GetAllCustomerFilterFunc = async (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;
  let LocalMobile = LocalParams.inMobile;
  let LocalFromRepo = await GetAllCustomerFilterFuncRepo({
    inBranch: LocalBranch,
    inMobile: LocalMobile,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo);
    return;
  };

  res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
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