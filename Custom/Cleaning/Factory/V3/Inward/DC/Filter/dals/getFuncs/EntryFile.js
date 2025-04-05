import { StartFunc as ReadFromFile } from '../../kLowDb/getFunc.js';
import { StartFunc as StartFuncFromGetSendDc } from '../../kLowDb/getSendDc.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

let GetSendDcFunc = () => {
	let LocalFromLowDb = StartFuncFromGetSendDc();

	return LocalFromLowDb;
};

export {
    GetFunc,
	GetSendDcFunc
};