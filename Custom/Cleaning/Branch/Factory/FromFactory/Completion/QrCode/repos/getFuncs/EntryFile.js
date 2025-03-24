import {
    GetFunc as GetFuncDal,
    GetPendingFunc as GetPendingFuncDal,
    GetScannedFunc as GetScannedFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
    GetFromFactoryDcWiseItems as GetFromFactoryDcWiseItemsDal,
    GetToScanPendingFunc as GetToScanPendingFuncDal
    ,
    GetAllFilterFunc as GetAllFilterFuncDal,
	GetScannedFilterFunc as GetScannedFilterFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inBranch }) => {
    return GetFuncDal({ inBranch });
};

let GetScannedFunc = ({ inBranch }) => {
    return GetScannedFuncDal({ inBranch });
};

let GetPendingFunc = ({ inBranch }) => {
    return GetPendingFuncDal({ inBranch });
};

let GetRowDataFunc = ({ inBranch, inId }) => {
    return GetRowDataFuncDal({ inBranch, inId });
};

let GetRowQrDataFunc = ({ inId }) => {
    return GetRowQrDataFuncDal({ inId });
};

let GetFromFactoryDcWiseItems = ({ inBranch, inId }) => {
    return GetFromFactoryDcWiseItemsDal({ inBranch, inId });
};

let GetToScanPendingFunc = ({ inBranch, inId }) => {
    return GetToScanPendingFuncDal({ inBranch, inId });
};
let GetAllFilterFunc = async ({ inBranch, fromDate, toDate }) => {
    let LocalFromDal = await GetAllFilterFuncDal({ inBranch, fromDate, toDate });

    return LocalFromDal;
};

let GetScannedFilterFunc = async ({ inBranch, fromDate, toDate }) => {
	let LocalFromDal = await GetScannedFilterFuncDal({ inBranch, fromDate, toDate });

	return LocalFromDal;
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetRowQrDataFunc, GetFromFactoryDcWiseItems, GetToScanPendingFunc,
    GetAllFilterFunc,
	GetScannedFilterFunc
};