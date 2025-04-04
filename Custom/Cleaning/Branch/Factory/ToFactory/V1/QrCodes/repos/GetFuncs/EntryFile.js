import {
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowCountFunc as GetRowCountFuncDal
,
	GetPendingFunc as GetPendingFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetRowDataFunc = ({ inBranch, inId }) => {
    return GetRowDataFuncDal({ inBranch, inId });
};

let GetRowCountFunc = ({ inBranch, inId }) => {
    return GetRowCountFuncDal({ inBranch, inId });
};

let GetPendingFunc = async ({inId,inFactory}) => {
	let LocalFromDal = await GetPendingFuncDal({inId,inFactory});

	return LocalFromDal;
};

export {
    GetRowDataFunc, GetRowCountFunc,
	GetPendingFunc
};