import {
    GetFunc as GetFuncRepo, GetDataOnlyFunc as GetDataOnlyFuncRepo, GetDataCountFunc as GetDataCountFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetDataOnlyFunc = async (req, res) => {
    let LocalFromRepo = await GetDataOnlyFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetDataCountFunc = async (req, res) => {
    let localKey = req.params.inKey
    let localValue = req.params.inValue

    let LocalFromRepo = await GetDataCountFuncRepo({
        inKey: localKey, inValue: localValue
    });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    GetFunc, GetDataOnlyFunc, GetDataCountFunc
};