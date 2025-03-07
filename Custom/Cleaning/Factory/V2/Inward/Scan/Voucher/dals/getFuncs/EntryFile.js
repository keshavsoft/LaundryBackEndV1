import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFiles/GetVoucherQrStatus.js';
import { StartFunc as GetSummary } from '../../kLowDb/ReadFiles/GetSummary.js';
import { StartFunc as GetAsIs } from '../../kLowDb/ReadFiles/GetAsIs.js';
import { StartFunc as GetVoucher } from '../../kLowDb/ReadFiles/GetVoucher.js';
import { StartFunc as GetRowData } from '../../kLowDb/ReadFiles/GetRowData.js';
import { StartFunc as GetOnlyScanDc } from '../../kLowDb/ReadFiles/GetOnlyScanDc.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetSummaryFunc = ({ inFactory }) => {
    return GetSummary({ inFactory });
};

let GetAsIsFunc = ({ inFactory }) => {
    return GetAsIs({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowData({ inId });
};

let GetAggregateFunc = ({ inId }) => {
    return "KeshavSoft"
    // return GetAggregate({ inId });
};

let GetOnlyScanDcFunc = ({ inFactory }) => {
    return GetOnlyScanDc({ inFactory });
};

export {
    GetFunc, GetQrStatusFunc, GetSummaryFunc, GetAsIsFunc, GetRowDataFunc, GetAggregateFunc, GetOnlyScanDcFunc
};