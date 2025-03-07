import {
    GetFuncs as GetFuncsRepo,
    GetSimpleFuncs as GetSimpleFuncsRepo,
    GetItemCountFuncs as GetItemCountFuncsRepo,
    GetIsSettledFuncs as GetIsSettledFuncsRepo,
    GetWithSettlementFuncs as GetWithSettlementFuncsRepo,
    GetWithDeliveryFuncs as GetWithDeliveryFuncsRepo,
    GetSortByDateLatestFunc as GetSortByDateLatestFuncRepo,
    GetSortByDateOldestFunc as GetSortByDateOldestFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalFromRepo = GetFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetSimpleFuncs = (req, res) => {
    let LocalFromRepo = GetSimpleFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetItemCountFuncs = (req, res) => {
    let LocalFromRepo = GetItemCountFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetIsSettledFuncs = (req, res) => {
    let LocalFromRepo = GetIsSettledFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetWithSettlementFuncs = (req, res) => {
    let LocalFromRepo = GetWithSettlementFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetWithDeliveryFuncs = (req, res) => {
    let LocalFromRepo = GetWithDeliveryFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetSortByDateLatestFunc = async (req, res) => {
    let LocalFromRepo = await GetSortByDateLatestFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetSortByDateOldestFunc = async (req, res) => {
    let LocalFromRepo = await GetSortByDateOldestFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetFuncs, GetSimpleFuncs, GetItemCountFuncs, GetIsSettledFuncs, GetWithSettlementFuncs,
    GetWithDeliveryFuncs,
    GetSortByDateLatestFunc,
    GetSortByDateOldestFunc
};