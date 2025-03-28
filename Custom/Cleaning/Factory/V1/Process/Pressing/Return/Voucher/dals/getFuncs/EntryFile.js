import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as Filter } from '../../kLowDb/ReadFileList/Filter.js';
import { StartFunc as TodayFilter } from '../../kLowDb/ReadFileList/TodayFilter.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return Filter({ inFactory, fromDate, toDate });
};

let GetTodayFilterFunc = ({ inFactory }) => {
    return TodayFilter({ inFactory });
};

export {
    GetFunc, GetFilterFunc, GetTodayFilterFunc
};