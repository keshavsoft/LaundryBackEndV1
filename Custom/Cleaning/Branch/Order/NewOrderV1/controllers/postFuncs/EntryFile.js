import {
    PostFunc as PostFuncRepo,
    PostSettlementFunc as PostSettlementFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

let PostFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBody = req.body;
    let LocalCustomerName = LocalBody.inCustomerName;
    let LocalMobileNumber = LocalBody.inMobileNumber;
    let LocalBranch = LocalParams.inBranch;

    let LocalFromRepo = PostFuncRepo({ inPostBody: LocalBody, inCustomerName: LocalCustomerName, inMobileNumber: LocalMobileNumber, inBranch: LocalBranch });

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
export { PostFunc, PostSettlementFunc };