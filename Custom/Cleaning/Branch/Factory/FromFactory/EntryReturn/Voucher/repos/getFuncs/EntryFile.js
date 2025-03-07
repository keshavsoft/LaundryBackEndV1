import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
	GetScanOnlyDcFunc as GetScanOnlyDcFuncDal
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

let GetScanOnlyDcFunc = async ({inBranch}) => {
	let LocalFromDal = await GetScanOnlyDcFuncDal({inBranch});

	return LocalFromDal;
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc,
	GetScanOnlyDcFunc
};