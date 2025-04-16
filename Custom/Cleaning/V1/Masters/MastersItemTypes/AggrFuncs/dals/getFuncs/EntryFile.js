import { StartFunc as StartFuncFromGetCount } from '../../kLowDb/getCount.js';

let GetCountFunc = () => {
	let LocalFromLowDb = StartFuncFromGetCount();

	return LocalFromLowDb;
};

export {
	GetCountFunc
};