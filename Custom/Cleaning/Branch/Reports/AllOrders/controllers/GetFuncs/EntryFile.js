import {
    GetFuncs as GetFuncsRepo,
    GetItemsFuncs as GetItemsFuncsRepo,
    GetGetUpComingDeliveryFunc as GetGetUpComingDeliveryFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetFuncsRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
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

let GetGetUpComingDeliveryFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate
    let LocalFromRepo = await GetGetUpComingDeliveryFuncRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetFuncs, GetItemsFuncs,
    GetGetUpComingDeliveryFunc
};