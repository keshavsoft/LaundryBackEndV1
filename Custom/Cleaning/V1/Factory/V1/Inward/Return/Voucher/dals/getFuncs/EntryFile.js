import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as StartFuncFromGetid } from '../../kLowDb/ReadFromFile/id.js';

let GetFunc = ({ inFactory }) => {
	return GetVoucher({ inFactory });
};

let GetidFunc = async ({ id }) => {
	let LocalFromLowDb = await StartFuncFromGetid({ id });

	return await LocalFromLowDb;
};

export {
	GetFunc,
	GetidFunc
};