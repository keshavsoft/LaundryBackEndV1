import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as Filter } from '../../kLowDb/ReadFileList/Filter.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    return Filter({ inFactory, fromDate, toDate });
};

export {
    GetFunc, GetFilterFunc
};