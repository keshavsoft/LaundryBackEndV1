import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFileList/GetVoucherQrStatus.js';
import { StartFunc as GetRowData } from '../../kLowDb/ReadFileList/GetRowData.js';
import { StartFunc as Filter } from '../../kLowDb/ReadFileList/Filter.js';
import { StartFunc as Today } from '../../kLowDb/ReadFileList/Today.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowData({ inId });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return Filter({ inFactory, fromDate, toDate });
};

let GetTodayFunc = ({ inFactory }) => {
    return Today({ inFactory });
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc, GetFilterFunc, GetTodayFunc
};