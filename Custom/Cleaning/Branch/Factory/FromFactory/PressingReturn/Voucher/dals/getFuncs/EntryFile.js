import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFileList/GetVoucherQrStatus.js';
import { StartFunc as GetRowData } from '../../kLowDb/ReadFileList/GetRowData.js';
import { StartFunc as StartFuncFromGetOnlyScanDc } from '../../kLowDb/ReadFileList/onlyScanDC.js';

let GetFunc = ({ inBranch }) => {
    return GetVoucher({ inBranch });
};

let GetQrStatusFunc = ({ inBranch }) => {
    return GetVoucherQrStatus({ inBranch });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowData({ inId });
};

let GetOnlyScanDcFunc = async ({ inBranch, fromDate, toDate }) => {
    let LocalFromLowDb = await StartFuncFromGetOnlyScanDc({ inBranch, fromDate, toDate });

    return await LocalFromLowDb;
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc,
    GetOnlyScanDcFunc
};