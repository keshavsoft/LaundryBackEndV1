import {
    GetAllFuncs as GetAllFuncsRepo,
    GetPendingFuncs as GetPendingFuncsRepo,
    GetScannedFuncs as GetScannedFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetAllFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch
    let LocalFromDate = LocalParams.inFromDate
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetAllFuncsRepo({ inBranch: LocalBranch, inFromDate:LocalFromDate, inToDate:LocalToDate });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetPendingFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetPendingFuncsRepo({ inBranch: LocalBranch, inFromDate:LocalFromDate, inToDate:LocalToDate  });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetScannedFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetScannedFuncsRepo({ inBranch: LocalBranch, inFromDate:LocalFromDate, inToDate:LocalToDate  });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};


export {
    GetAllFuncs, GetPendingFuncs, GetScannedFuncs
};