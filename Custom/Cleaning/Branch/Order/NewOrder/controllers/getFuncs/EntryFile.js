import {
    GetFunc as GetFuncRepo,
    GetOrderShowFunc as GetOrderShowFuncRepo,
    GetRowSettlementFunc as GetRowSettlementFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

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

    let LocalFromRepo = GetOrderShowFuncRepo({ inBranch: LocalBranch, inRow: LocalRowPk });

    if (LocalFromRepo.KTF === false) res.status(500).send(LocalFromRepo.KReason);

    res.status(200).json(LocalFromRepo.JsonData);
};


let GetRowSettlementFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalRowPk = LocalParams.inRow;

    let LocalFromRepo = GetRowSettlementFuncRepo({ inBranch: LocalBranch, inRow: LocalRowPk });

    if (LocalFromRepo.KTF === false) res.status(500).send(LocalFromRepo.KReason);

    res.status(200).json(LocalFromRepo.JsonData);
};

export { GetFunc, GetOrderShowFunc,GetRowSettlementFunc };