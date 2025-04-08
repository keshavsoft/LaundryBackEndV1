import {
	GetFunc as GetFuncDal,
	GetVoucherFindFunc as GetVoucherFindFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
	return GetFuncDal({ inFactory });
};

let GetVoucherFindFunc = ({ id }) => {
	let LocalFromDal = GetVoucherFindFuncDal({ id });

	return LocalFromDal;
};

export {
	GetFunc,
	GetVoucherFindFunc
};