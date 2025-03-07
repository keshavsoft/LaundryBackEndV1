import {
    GetFunc as GetFuncRepo,
    GetOrderShowFunc as GetOrderShowFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalinRow = LocalParams.inRow;
    let LocalinId = LocalParams.inId;
    let LocalBranch = LocalParams.inBranch;

    let LocalFromRepo = GetFuncRepo({ inRow: LocalinRow, inId: LocalinId, inBranch: LocalBranch });

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

export { GetFunc, GetOrderShowFunc };