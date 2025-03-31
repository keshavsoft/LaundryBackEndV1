import {
    PostFunc as PostFuncRepo,
    PostSettlementFunc as PostSettlementFuncRepo,
    SubTableFunc as SubTableFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBody = req.body;
    let LocalMobileNumber = LocalBody.inMobileNumber;
    let LocalBranch = LocalParams.inBranch;
    let LocalUserName = LocalBody.UserName;

    let LocalFromRepo = PostFuncRepo({ inMobileNumber: LocalMobileNumber, inBranch: LocalBranch, inUserName: LocalUserName });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

let PostSettlementFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBody = req.body;
    let LocalBranch = LocalParams.inBranch;
    let LocalId = LocalParams.inId;

    let LocalFromRepo = PostSettlementFuncRepo({ inPostBody: LocalBody, inId: LocalId, inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

let SubTableFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBody = req.body;
    let LocalBranch = LocalParams.inBranch;
    let Localid = req.params.id;
    let LocalinKey = req.params.inKey;

    let LocalFromRepo = SubTableFuncRepo({ inTable: LocalBranch, inPostBody: LocalBody, id: Localid, inKey: LocalinKey });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo);
};
export { PostFunc, PostSettlementFunc, SubTableFunc };