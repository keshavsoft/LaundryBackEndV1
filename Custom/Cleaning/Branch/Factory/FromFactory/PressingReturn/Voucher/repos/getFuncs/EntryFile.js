import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
	GetOnlyScanDcFunc as GetOnlyScanDcFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inBranch }) => {
    return GetFuncDal({ inBranch });
};

let GetQrStatusFunc = ({ inBranch }) => {
    return GetQrStatusFuncDal({ inBranch });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

let GetOnlyScanDcFunc = async ({inBranch}) => {
	let LocalFromDal = await GetOnlyScanDcFuncDal({inBranch});

	return LocalFromDal;
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc,
	GetOnlyScanDcFunc
};