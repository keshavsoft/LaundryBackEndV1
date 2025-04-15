import {
    GetNoSettlementFunc as GetNoSettlementFuncRepo,
    GetItemsOnlyFunc as GetItemsOnlyFuncRepo,
    GetOrderFromToDateFunc as GetOrderFromToDateFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetNoSettlementFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch
    let LocalFromRepo = GetNoSettlementFuncRepo({ inBranch: LocalBranch });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

let GetItemsOnlyFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate
    let LocalFromRepo = GetItemsOnlyFuncRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetOrderFromToDateFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate
    let LocalFromRepo = GetOrderFromToDateFuncRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetNoSettlementFunc,
    GetItemsOnlyFunc,
    GetOrderFromToDateFunc
};