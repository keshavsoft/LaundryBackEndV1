import {
    GetRowDataFunc as GetRowDataFuncRepo,
    GetRowCountFunc as GetRowCountFuncRepo,
    GetPendingFunc as GetPendingFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowDataFuncRepo({ inBranch: LocalinBranch, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetRowCountFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowCountFuncRepo({ inBranch: LocalinBranch, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetPendingFunc = async (req, res) => {
    let LocalParams = req.params;
    let Localid = LocalParams.inId;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = await GetPendingFuncRepo({ inId: Localid, inFactory: LocalFactory });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetRowDataFunc, GetRowCountFunc,
    GetPendingFunc
};