import {
	GetFuncs as GetFuncsRepo,
	GetOrderDasboardFunc as GetOrderDasboardFuncRepo,
	GetTodayFunc as GetTodayFuncRepo,
	GetAllOrdersFunc as GetAllOrdersFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {

	let LocalFromRepo = GetFuncsRepo();

	if (LocalFromRepo.KTF === false) {
		res.status(500).send(LocalFromRepo.KReason);
		return;
	};

	res.status(200).json(LocalFromRepo);
};



let GetOrderDasboardFunc = async (req, res) => {
	let LocalFromRepo = await GetOrderDasboardFuncRepo();

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};
let GetTodayFunc = async (req, res) => {
	let LocalParams = req.params;
	let LocalBranch = LocalParams.inBranch;

	let LocalFromRepo = await GetTodayFuncRepo({ inBranch: LocalBranch });

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).json(LocalFromRepo.JsonData);

};

let GetAllOrdersFunc = async (req, res) => {
	let LocalParams = req.params;
	let LocalBranch = LocalParams.inBranch;

	let LocalFromRepo = await GetAllOrdersFuncRepo({ inBranch: LocalBranch });

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).json(LocalFromRepo.JsonData);

};

export {
	GetFuncs, GetOrderDasboardFunc, GetTodayFunc,
	GetAllOrdersFunc
};