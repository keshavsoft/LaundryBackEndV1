import {
	GetFilterFunc as GetFilterFuncDal,
	GetGenerateFunc as GetGenerateFuncDal,
} from '../../dals/getFuncs/EntryFile.js';


let GetFilterFunc = ({ inFilterKey, inFilterValue }) => {

	return GetFilterFuncDal({ inFilterKey, inFilterValue });
};
let GetGenerateFunc = async ({ inBranch, inId }) => {
	let LocalFromDal = await GetGenerateFuncDal({ inBranch, inId });

	return LocalFromDal;
};

export {
	GetFilterFunc,
	GetGenerateFunc
};