import {
    GetFuncs as GetFuncsRepo,
    GetOrdersDeleteFunc as GetOrdersDeleteFuncRepo
,
	GetAllItemsFunc as GetAllItemsFuncRepo
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

let GetOrdersDeleteFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch
    let LocalFromRepo = await GetOrdersDeleteFuncRepo({ inBranch: LocalBranch });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetAllItemsFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromDate = LocalParams.inFromDate;
    let LocalToDate = LocalParams.inToDate

	let LocalFromRepo = await GetAllItemsFuncRepo({ inBranch: LocalBranch, inFromDate: LocalFromDate, inToDate: LocalToDate });

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetFuncs, GetOrdersDeleteFunc,
	GetAllItemsFunc
};