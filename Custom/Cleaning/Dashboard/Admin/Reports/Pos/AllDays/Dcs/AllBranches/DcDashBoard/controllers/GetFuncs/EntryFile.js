import {
    GetFuncs as GetFuncsRepo,
    GetAllDcsFunc as GetAllDcsFuncRepo,
	GetTodayDcsFunc as GetTodayDcsFuncRepo
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

export {
    GetFuncs,
    GetAllDcsFunc,
	GetTodayDcsFunc
};