import {
    GetFuncs as GetFuncsRepo,
    GetAllDcsFunc as GetAllDcsFuncRepo,
    GetTodayDcsFunc as GetTodayDcsFuncRepo,
    GetAllBranchScannedFunc as GetAllBranchScannedFuncRepo,
    GetAllFactoryPendingFunc as GetAllFactoryPendingFuncRepo,
    GetAllFactoryScannedFunc as GetAllFactoryScannedFuncRepo,
    GetTodayBranchScannedFunc as GetTodayBranchScannedFuncRepo,
    GetTodayFactoryPendingFunc as GetTodayFactoryPendingFuncRepo,
	GetTodayFactoryScannedFunc as GetTodayFactoryScannedFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {

    let LocalFromRepo = GetFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetAllDcsFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromRepo = await GetAllDcsFuncRepo({ inBranch: LocalBranch });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetTodayDcsFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromRepo = await GetTodayDcsFuncRepo({ inBranch: LocalBranch });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetAllBranchScannedFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = await GetAllBranchScannedFuncRepo({ inBranch: LocalinBranch, inId: Localid });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetAllFactoryPendingFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;
    let LocalFromRepo = await GetAllFactoryPendingFuncRepo({ inFactory: LocalinFactory, inId: Localid });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetAllFactoryScannedFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;
    let LocalFromRepo = await GetAllFactoryScannedFuncRepo({ inFactory: LocalinFactory, inId: Localid });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetTodayBranchScannedFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = await GetTodayBranchScannedFuncRepo({ inBranch: LocalinBranch, inId: Localid });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetTodayFactoryPendingFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;
    let LocalFromRepo = await GetTodayFactoryPendingFuncRepo({ inFactory: LocalinFactory, inId: Localid });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetTodayFactoryScannedFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;
	let LocalFromRepo = await GetTodayFactoryScannedFuncRepo({ inFactory: LocalinFactory, inId: Localid });

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetFuncs, GetAllDcsFunc, GetTodayDcsFunc, GetAllBranchScannedFunc, GetAllFactoryPendingFunc,
    GetAllFactoryScannedFunc, GetTodayBranchScannedFunc,
    GetTodayFactoryPendingFunc,
	GetTodayFactoryScannedFunc
};