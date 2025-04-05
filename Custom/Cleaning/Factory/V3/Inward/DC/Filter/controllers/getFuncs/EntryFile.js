import {
    GetFunc as GetFuncRepo,
	GetSendDcFunc as GetSendDcFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

let GetSendDcFunc = (req, res) => {
	let LocalFromRepo = GetSendDcFuncRepo();

	if (LocalFromRepo === false) {
		res.status(500).send(LocalFromRepo);
		return;
	};

	res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

export {
    GetFunc,
	GetSendDcFunc
};