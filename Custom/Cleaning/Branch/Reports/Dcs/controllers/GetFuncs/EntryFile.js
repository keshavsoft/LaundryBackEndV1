import {
    GetFuncs as GetFuncsRepo,
    GetToScanFuncs as GetToScanFuncsRepo,
    GetSentAndFactoryScanFuncs as GetSentAndFactoryScanFuncsRepo,
    GetEntryReturnFuncs as GetEntryReturnFuncsRepo,
    GetProcessReturnFuncs as GetProcessReturnFuncsRepo,
    GetCompletionReturnFuncs as GetCompletionReturnFuncsRepo

} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetToScanFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetToScanFuncsRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    res.status(200).json(LocalFromRepo);
};

let GetSentAndFactoryScanFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetSentAndFactoryScanFuncsRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    res.status(200).json(LocalFromRepo);
};

let GetEntryReturnFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetEntryReturnFuncsRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    res.status(200).json(LocalFromRepo);
};

let GetProcessReturnFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetProcessReturnFuncsRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    res.status(200).json(LocalFromRepo);
};

let GetCompletionReturnFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

    let LocalFromRepo = GetCompletionReturnFuncsRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

    res.status(200).json(LocalFromRepo);
};

export {
    GetFuncs, GetToScanFuncs, GetSentAndFactoryScanFuncs, GetEntryReturnFuncs, GetProcessReturnFuncs, GetCompletionReturnFuncs
};