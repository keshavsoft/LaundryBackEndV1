import {
    GetFuncs as GetFuncsRepo,
    GetAsIsFuncs as GetAsIsFuncsRepo,
	GetTodayOrdersFunc as GetTodayOrdersFuncRepo,
	GetQrCodesDashBoardFunc as GetQrCodesDashBoardFuncRepo,
	GetTodayDashBoardQrCodesFunc as GetTodayDashBoardQrCodesFuncRepo,
	GetAllDashBoardQrCodesFunc as GetAllDashBoardQrCodesFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    const LocalFromRepo = GetFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };
    res.set({
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
    }).status(200).json(LocalFromRepo);
};

let GetAsIsFuncs = (req, res) => {

    let LocalFromRepo = GetAsIsFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetTodayOrdersFunc = async (req, res) => {
	let LocalFromRepo = await GetTodayOrdersFuncRepo();

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetQrCodesDashBoardFunc = async (req, res) => {
	let LocalFromRepo = await GetQrCodesDashBoardFuncRepo();

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetTodayDashBoardQrCodesFunc = async (req, res) => {
	let LocalBranchName = req.params.inBranch;
	let LocalFromRepo = await GetTodayDashBoardQrCodesFuncRepo({ inBranch: LocalBranchName });

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetAllDashBoardQrCodesFunc = async (req, res) => {
	let LocalBranchName = req.params.inBranch;
	let LocalFromRepo = await GetAllDashBoardQrCodesFuncRepo({ inBranch: LocalBranchName });

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetFuncs, GetAsIsFuncs,
	GetTodayOrdersFunc,
	GetQrCodesDashBoardFunc,
	GetTodayDashBoardQrCodesFunc,
	GetAllDashBoardQrCodesFunc
};