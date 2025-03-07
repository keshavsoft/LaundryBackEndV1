import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/allOrders.js';

let GetAllFuncs = () => {
    return TodayAllQrCodes();
};

export {
    GetAllFuncs
};