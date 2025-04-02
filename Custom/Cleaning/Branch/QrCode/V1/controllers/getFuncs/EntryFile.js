import {
    GetFilterFunc as GetFilterFuncRepo,
    GetGenerateFunc as GetGenerateFuncRepo,
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
let GetGenerateFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalId = LocalParams.inId;
    let LocalFromRepo = await GetGenerateFuncRepo({ inBranch: LocalBranch, inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};



export {
    GetFilterFunc,
    GetGenerateFunc,
};