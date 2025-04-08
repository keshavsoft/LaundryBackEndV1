import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFileList/GetVoucherQrStatus.js';
import { StartFunc as GetRowData } from '../../kLowDb/ReadFileList/GetRowData.js';
import { StartFunc as StartFuncFromGetToday } from '../../kLowDb/getToday.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowData({ inId });
};

let GetTodayFunc = ({ inFactory }) => {
    let LocalFromLowDb = StartFuncFromGetToday({ inFactory });

    return LocalFromLowDb;
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc,
    GetTodayFunc
};