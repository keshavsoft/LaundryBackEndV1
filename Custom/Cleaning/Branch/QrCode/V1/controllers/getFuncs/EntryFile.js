import {
    GetFilterFunc as GetFilterFuncRepo
} from '../../repos/getFuncs/EntryFile.js';


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
    GetFilterFunc
};