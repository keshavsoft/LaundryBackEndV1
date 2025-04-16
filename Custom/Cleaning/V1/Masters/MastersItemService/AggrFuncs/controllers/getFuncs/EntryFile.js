import {
	GetCountFunc as GetCountFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetCountFunc = (req, res) => {
	let LocalFromRepo = GetCountFuncRepo();

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

export {
	GetCountFunc
};