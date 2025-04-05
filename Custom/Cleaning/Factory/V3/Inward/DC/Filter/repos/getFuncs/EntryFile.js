import {
    GetFunc as GetFuncDal,
	GetSendDcFunc as GetSendDcFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

let GetSendDcFunc = () => {
	let LocalFromDal = GetSendDcFuncDal();

	return LocalFromDal;
};

export {
    GetFunc,
	GetSendDcFunc
};