import {
    GetFuncs as GetFuncsRepo,
    GetAsIsFuncs as GetAsIsFuncsRepo,
	GetCashFunc as GetCashFuncRepo,
	GetCardFunc as GetCardFuncRepo,
	GetUpiFunc as GetUpiFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

const GetFuncs = (req, res) => {
    const { inBranch, inFromDate, inToDate } = req.params;
    const LocalFromRepo = GetFuncsRepo({ inBranch, inFromDate, inToDate });

    if (LocalFromRepo.length === 0) {
        return res.status(500).end();
    }

    return res.status(200).json(LocalFromRepo);
};

const GetAsIsFuncs = (req, res) => {
    const LocalFromRepo = GetAsIsFuncsRepo();

    if (!LocalFromRepo.KTF) {
        return res.status(500).send(LocalFromRepo.KReason);
    }

    return res.status(200).json(LocalFromRepo);
};

let GetCashFunc = async (req, res) => {
    const { inBranch, inFromDate, inToDate } = req.params;
	let LocalFromRepo = await GetCashFuncRepo({inBranch, inFromDate, inToDate});

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};
let GetCardFunc = async (req, res) => {
    const { inBranch, inFromDate, inToDate } = req.params;
	let LocalFromRepo = await GetCardFuncRepo({inBranch, inFromDate, inToDate});

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};
let GetUpiFunc = async (req, res) => {
    const { inBranch, inFromDate, inToDate } = req.params;
	let LocalFromRepo = await GetUpiFuncRepo({inBranch, inFromDate, inToDate});

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};
export { GetFuncs, GetAsIsFuncs,GetCashFunc,GetCardFunc,GetUpiFunc};