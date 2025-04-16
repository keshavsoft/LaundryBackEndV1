import {
    GetDataOnlyFunc as GetDataOnlyFuncRepo,
    GetRowDataFunc as GetRowDataFuncRepo,
    GetFilterFunc as GetFilterFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetDataOnlyFunc = (req, res) => {
    let LocalFromRepo = GetDataOnlyFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

let GetRowDataFunc = (req, res) => {
    let localid = req.params.id
    let LocalFromRepo = GetRowDataFuncRepo({ inId: localid });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetFilterFunc = (req, res) => {

    let LocalIfFromParam = req.params;
    let LocalFilterKey = LocalIfFromParam.inFilterKey;
    let LocalFilterValue = LocalIfFromParam.inFilterValue;

    let LocalFromRepo = GetFilterFuncRepo({
        inFilterKey: LocalFilterKey,
        inFilterValue: LocalFilterValue
    });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};
export {
    GetDataOnlyFunc, GetRowDataFunc,
    GetFilterFunc
};