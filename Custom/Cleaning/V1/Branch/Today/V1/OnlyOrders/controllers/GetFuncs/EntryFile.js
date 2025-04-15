import {
    GetFuncs as GetFuncsRepo,
    GetItemsFuncs as GetItemsFuncsRepo,
    GetBillPrintFunc as GetBillPrintFuncRepo,
    GetNoSettlementFunc as GetNoSettlementFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetFuncsRepo({ inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

let GetItemsFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetItemsFuncsRepo({ inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

let GetBillPrintFunc = async (req, res) => {
    let LocalParams = req.params;
    let Localpk = LocalParams.inId;
    let LocalBranch = LocalParams.inBranch
    let LocalFromRepo = await GetBillPrintFuncRepo({ inId: Localpk, inBranch: LocalBranch });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

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

export {
    GetFuncs, GetItemsFuncs,
    GetBillPrintFunc,
    GetNoSettlementFunc
};