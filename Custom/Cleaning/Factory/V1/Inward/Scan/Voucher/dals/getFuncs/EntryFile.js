import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFiles/GetVoucherQrStatus.js';
import { StartFunc as GetVoucher } from '../../kLowDb/ReadFiles/GetVoucher.js';
import { StartFunc as GetRowData } from '../../kLowDb/ReadFiles/GetRowData.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowData({ inId });
};

let GetAggregateFunc = ({ inId }) => {
    return "KeshavSoft"
    // return GetAggregate({ inId });
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc, GetAggregateFunc
};