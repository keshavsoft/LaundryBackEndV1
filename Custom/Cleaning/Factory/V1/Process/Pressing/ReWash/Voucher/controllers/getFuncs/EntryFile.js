import {
    GetFunc as GetFuncRepo,
    GetQrStatusFunc as GetQrStatusFuncRepo,
    GetFilterFunc as GetFilterFuncRepo
    
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetQrStatusFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetQrStatusFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetFilterFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromDate = LocalParams.fromDate;
    let LocalToDate = LocalParams.toDate;

    let LocalFromRepo = GetFilterFuncRepo({ inFactory: LocalFactory, fromDate: LocalFromDate, toDate: LocalToDate });

    res.status(200).json(LocalFromRepo);
};

export {
    GetFunc, GetQrStatusFunc, GetFilterFunc
};