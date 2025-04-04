import {
    GetFuncs as GetFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.fromDate;
    let LocalToDate = LocalParams.toDate;

    let LocalFromRepo = GetFuncsRepo({ inBranch: LocalBranch, fromDate: LocalFromDate, toDate: LocalToDate });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    GetFuncs
};