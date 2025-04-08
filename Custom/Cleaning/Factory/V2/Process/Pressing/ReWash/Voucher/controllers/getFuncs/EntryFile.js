import {
    GetFunc as GetFuncRepo,
    GetQrStatusFunc as GetQrStatusFuncRepo,
    GetFilterFunc as GetFilterFuncRepo,
    GetTodayFilterFunc as GetTodayFilterFuncRepo
    ,
    GetRowDataFunc as GetRowDataFuncRepo
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

let GetTodayFilterFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetTodayFilterFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetRowDataFunc = (req, res) => {
    let LocalParams = req.params;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowDataFuncRepo({ id: Localid });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

export {
    GetFunc, GetQrStatusFunc, GetFilterFunc, GetTodayFilterFunc,
    GetRowDataFunc
};