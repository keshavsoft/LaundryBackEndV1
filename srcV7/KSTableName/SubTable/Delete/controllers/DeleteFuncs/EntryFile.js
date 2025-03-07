import {
    DeleteFunc as DeleteFuncRepo,
    ReferenceCheckFunc as ReferenceCheckFuncRepo,
    DeleteSubKeyFunc as DeleteSubKeyFuncRepo
} from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteSubKeyFunc = async (req, res) => {
    let LocalId = req.params.Id;
    const LocalKey = req.params.inKey;
    const LocalSubId = req.params.SubId;

    let LocalFromRepo = await DeleteSubKeyFuncRepo({ inId: LocalId, inKey: LocalKey, inSubId: LocalSubId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let DeleteFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await DeleteFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let ReferenceCheckFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await ReferenceCheckFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { DeleteFunc, ReferenceCheckFunc, DeleteSubKeyFunc };