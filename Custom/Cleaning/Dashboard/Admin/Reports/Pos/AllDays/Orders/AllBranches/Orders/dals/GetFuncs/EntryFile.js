import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/allData.js';
import { StartFunc as TodayAllQrCodeswithRows } from '../../kLowDb/ReadFromFile/withRows.js';
import { StartFunc as StartFuncMergeArray } from '../../kLowDb/ReadFromFile/mergeArray.js';
import { StartFunc as TodayOrderDashboard } from '../../kLowDb/ReadFromFile/orderDashboard.js';




let GetAllFuncs = () => {
    return TodayAllQrCodes();
};

let GetAsIsFuncs = () => {
    return StartFuncMergeArray();
};

let GetWithRowsFuncs = () => {
    return TodayAllQrCodeswithRows();
};

let GetOrderDasboardFunc = () => {
    return TodayOrderDashboard();
};

export {
    GetAllFuncs, GetAsIsFuncs, GetWithRowsFuncs, GetOrderDasboardFunc
};