import {
	GetFunc as GetFuncRepo,
	GetidFunc as GetidFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
	let LocalParams = req.params;
	let LocalFactory = LocalParams.inFactory;
	let LocalFromRepo = GetFuncRepo({ inFactory: LocalFactory });

	res.status(200).json(LocalFromRepo);
};

let GetidFunc = async (req, res) => {
	let LocalParams = req.params;
	let Localid = LocalParams.id;

	let LocalFromRepo = await GetidFuncRepo({ id: Localid });

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
	GetFunc,
	GetidFunc
};