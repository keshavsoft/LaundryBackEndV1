import {
    GetFunc as GetFuncRepo,
    GetPendingFunc as GetPendingFuncRepo,
    GetScannedFunc as GetScannedFuncRepo,
    GetRowDataFunc as GetRowDataFuncRepo,
    GetReturnsFunc as GetReturnsFuncRepo,
    GetRowQrDataFunc as GetRowQrDataFuncRepo,
    GetRowCountFunc as GetRowCountFuncRepo,
    GetFromBranchDcWiseItemsFunc as GetFromBranchDcWiseItemsRepo,
    GetToScanPendingFunc as GetToScanPendingRepo,
    GetDCQrReturnFunc as GetDCQrReturnFuncRepo,
    GetAggregateFunc as GetAggregateFuncRepo,
    GetFilterFunc as GetFilterFuncRepo,
    GetScannedFilterFunc as GetScannedFilterFuncRepo,
    GetInWashingFunc as GetInWashingFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetPendingFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetPendingFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetScannedFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetScannedFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetReturnsFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetReturnsFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;

    let LocalFromRepo = GetRowDataFuncRepo({ inFactory: LocalFactory, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetRowQrDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowQrDataFuncRepo({ inId: Localid, });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

let GetRowCountFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowCountFuncRepo({ inBranch: LocalinBranch, inId: Localid });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};
let GetFromBranchDcWiseItemsFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;

    let LocalFromRepo = GetFromBranchDcWiseItemsRepo({ inFactory: LocalFactory, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetToScanPendingFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;

    let LocalFromRepo = GetToScanPendingRepo({ inFactory: LocalFactory, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetDCQrReturnFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;

    let LocalFromRepo = GetDCQrReturnFuncRepo({ inFactory: LocalFactory, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetAggregateFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;

    let LocalFromRepo = GetAggregateFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetFilterFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromDate = LocalParams.fromDate;
    let LocalToDate = LocalParams.toDate;

    let LocalFromRepo = GetFilterFuncRepo({ inFactory: LocalFactory, fromDate: LocalFromDate, toDate: LocalToDate });

    res.status(200).json(LocalFromRepo);
};

let GetScannedFilterFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromDate = LocalParams.fromDate;
    let LocalToDate = LocalParams.toDate;

    let LocalFromRepo = GetScannedFilterFuncRepo({ inFactory: LocalFactory, fromDate: LocalFromDate, toDate: LocalToDate });

    res.status(200).json(LocalFromRepo);
};
let GetInWashingFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromDate = LocalParams.fromDate;
    let LocalToDate = LocalParams.toDate;
    let LocalFromRepo = GetInWashingFuncRepo({ inFactory: LocalFactory, fromDate: LocalFromDate, toDate: LocalToDate });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc, GetRowQrDataFunc,
    GetRowCountFunc, GetFromBranchDcWiseItemsFunc, GetToScanPendingFunc, GetDCQrReturnFunc, GetAggregateFunc,
    GetFilterFunc, GetScannedFilterFunc,
    GetInWashingFunc
};