import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';
import { StartFunc as AllDaysOrdersWithQrs } from '../../kLowDb/ReadFileList/AllDaysOrdersWithQrs.js';
import { StartFunc as OrdersDelete } from '../../kLowDb/ReadFileList/OrdersDelete.js';

let GetFuncs = ({ inBranch }) => {
    return AllDaysOrdersWithQrs({ inBranch });
};

let GetTodayFuncs = ({ inBranch }) => {
    return TodayOrdersWithQrs({ inBranch });
};

let GetOrdersDeleteFunc = async ({ inBranch }) => {
    let LocalFromLowDb = await OrdersDelete({ inBranch });

    return await LocalFromLowDb;
};

export {
    GetFuncs, GetTodayFuncs, GetOrdersDeleteFunc
};