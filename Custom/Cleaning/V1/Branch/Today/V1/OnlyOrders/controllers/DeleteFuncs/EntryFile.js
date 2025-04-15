import { DeleteFunc as DeleteFuncRepo } from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalId = LocalParams.inId;

    let LocalFromRepo = await DeleteFuncRepo({ inId: LocalId, inBranch: LocalBranch });
    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { DeleteFunc };