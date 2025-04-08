import {
	GetFunc as GetFuncRepo,
	GetVoucherFindFunc as GetVoucherFindFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
	let LocalParams = req.params;
	let LocalFactory = LocalParams.inFactory;
	let LocalFromRepo = GetFuncRepo({ inFactory: LocalFactory });

	res.status(200).json(LocalFromRepo);
};

let GetVoucherFindFunc = (req, res) => {
	let LocalParams = req.params;
	let Localid = LocalParams.id;
	let LocalFromRepo = GetVoucherFindFuncRepo({ id: Localid });

	if (LocalFromRepo.KTF === false) {
		res.status(500).send(LocalFromRepo.KReason);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo.JSONData));
};

export {
	GetFunc,
	GetVoucherFindFunc
};