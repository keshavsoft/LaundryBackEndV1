import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as StartFuncFromGetVoucherFind } from '../../kLowDb/ReadFromFile/VoucherFind.js';

let GetFunc = ({ inFactory }) => {
	return GetVoucher({ inFactory });
};

let GetVoucherFindFunc = ({ id }) => {
	let LocalFromLowDb = StartFuncFromGetVoucherFind({ id });

	return LocalFromLowDb;
};

export {
	GetFunc,
	GetVoucherFindFunc
};