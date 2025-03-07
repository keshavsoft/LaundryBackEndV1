import {
    GetFuncs as GetFuncsRepo,
    GetToScanFuncs as GetToScanFuncsRepo,
    GetToScanOnlyFuncs as GetToScanOnlyFuncsRepo,
    GetSentFuncs as GetSentFuncsRepo,
    GetSentAndFactoryScanFuncs as GetSentAndFactoryScanFuncsRepo,
    GetRowDataFuncs as GetRowDataFuncsRepo,
    GetToPrintOnlyFuncs as GetToPrintOnlyFuncsRepo,
    GetScanOnlyFuncs as GetScanOnlyFuncsRepo,
    GetDeleteVocherFuncs as GetDeleteVocherFuncsRepo,
	GetQrDataWithPrintFunc as GetQrDataWithPrintFuncRepo,
	GetShowAllFunc as GetShowAllFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetToScanFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetToScanFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetToScanOnlyFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetToScanOnlyFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetSentFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetSentFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};
let GetSentAndFactoryScanFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetSentAndFactoryScanFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetRowDataFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.id

    let LocalFromRepo = GetRowDataFuncsRepo({ inId: LocalId });

    res.status(200).json(LocalFromRepo);
};

let GetToPrintOnlyFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetToPrintOnlyFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetScanOnlyFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetScanOnlyFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetDeleteVocherFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetDeleteVocherFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};
let GetQrDataWithPrintFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalDC = LocalParams.inDC
	let LocalFromRepo = await GetQrDataWithPrintFuncRepo({ inDC: LocalDC });

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};
let GetShowAllFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

	let LocalFromRepo = await GetShowAllFuncRepo({inBranch: LocalBranch});

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs, GetSentFuncs,
    GetSentAndFactoryScanFuncs, GetRowDataFuncs, GetToPrintOnlyFuncs, GetScanOnlyFuncs, GetDeleteVocherFuncs,
	GetQrDataWithPrintFunc,
	GetShowAllFunc
};