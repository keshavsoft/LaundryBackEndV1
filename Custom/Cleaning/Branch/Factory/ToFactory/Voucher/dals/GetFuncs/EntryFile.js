import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';
import { StartFunc as toScan } from '../../kLowDb/ReadFromFiles/toScan.js';
import { StartFunc as toScanOnly } from '../../kLowDb/ReadFromFiles/toScanOnly.js';
import { StartFunc as sent } from '../../kLowDb/ReadFromFiles/sent.js';
import { StartFunc as SentAndFactoryScan } from '../../kLowDb/ReadFromFiles/SentAndFactoryScan.js';
import { StartFunc as GetRowData } from '../../kLowDb/ReadFromFiles/GetRowData.js';
import { StartFunc as ToPrintOnly } from '../../kLowDb/ReadFromFiles/ToPrintOnly.js';
import { StartFunc as ScanOnly } from '../../kLowDb/ReadFromFiles/ScanOnly.js';
import { StartFunc as DeleteVocher } from '../../kLowDb/ReadFromFiles/DeleteVocher.js';
import { StartFunc as StartFuncFromGetQrDataWithPrint } from '../../kLowDb/ReadFromFiles/GetQrDataWithPrintFunc.js';
import { StartFunc as StartFuncFromGetShowAll } from '../../kLowDb/ReadFromFile/ShowAll.js';


let GetFuncs = ({ inBranch }) => {
    return ReadFromFiles({ inBranch });
};

let GetToScanFuncs = ({ inBranch }) => {
    return toScan({ inBranch });
};

let GetToScanOnlyFuncs = ({ inBranch }) => {
    return toScanOnly({ inBranch });
};

let GetSentFuncs = ({ inBranch }) => {
    return sent({ inBranch });
};

let GetSentAndFactoryScanFuncs = ({ inBranch }) => {
    return SentAndFactoryScan({ inBranch });
};

let GetRowDataFuncs = ({ inId }) => {
    return GetRowData({ inId });
};

let GetToPrintOnlyFuncs = ({ inBranch }) => {
    return ToPrintOnly({ inBranch });
};

let GetScanOnlyFuncs = ({ inBranch }) => {
    return ScanOnly({ inBranch });
};

let GetDeleteVocherFuncs = ({ inBranch }) => {
    return DeleteVocher({ inBranch });
};


let GetQrDataWithPrintFunc = async ({ inDC }) => {
	let LocalFromLowDb = await StartFuncFromGetQrDataWithPrint({ inDC });

	return await LocalFromLowDb;
};
let GetShowAllFunc = async ({inBranch}) => {
	let LocalFromLowDb = await StartFuncFromGetShowAll({inBranch});

	return await LocalFromLowDb;
};

export {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs, GetSentFuncs, GetSentAndFactoryScanFuncs,
     GetRowDataFuncs, GetToPrintOnlyFuncs, GetScanOnlyFuncs, GetDeleteVocherFuncs,
	GetQrDataWithPrintFunc,
	GetShowAllFunc
};