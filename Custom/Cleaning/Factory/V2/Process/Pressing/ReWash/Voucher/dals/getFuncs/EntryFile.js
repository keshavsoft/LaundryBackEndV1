import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFileList/GetVoucherQrStatus.js';
import { StartFunc as Filter } from '../../kLowDb/ReadFileList/Filter.js';
import { StartFunc as Today } from '../../kLowDb/ReadFileList/Today.js';
import { StartFunc as StartFuncFromGetRowData } from '../../kLowDb/getRowData.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return Filter({ inFactory, fromDate, toDate });
};

let GetTodayFilterFunc = ({ inFactory }) => {
    return Today({ inFactory });
};

let GetRowDataFunc = ({ id }) => {
    let LocalFromLowDb = StartFuncFromGetRowData({ id });

    return LocalFromLowDb;
};

export {
    GetFunc, GetQrStatusFunc, GetFilterFunc, GetTodayFilterFunc,
    GetRowDataFunc
};