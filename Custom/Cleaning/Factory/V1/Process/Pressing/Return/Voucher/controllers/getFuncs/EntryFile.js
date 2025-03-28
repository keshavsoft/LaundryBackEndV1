import {
    GetFunc as GetFuncRepo,
    GetFilterFunc as GetFilterFuncRepo,
    GetTodayFilterFunc as GetTodayFilterFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetFuncRepo({ inFactory: LocalFactory });

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
}

export {
    GetFunc, GetFilterFunc, GetTodayFilterFunc
};