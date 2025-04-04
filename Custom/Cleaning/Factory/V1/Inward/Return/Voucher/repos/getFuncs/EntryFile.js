import {
    GetFunc as GetFuncDal,
	GetidFunc as GetidFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetidFunc = async ({id}) => {
	let LocalFromDal = await GetidFuncDal({id});

	return LocalFromDal;
};

export {
    GetFunc,
	GetidFunc
};