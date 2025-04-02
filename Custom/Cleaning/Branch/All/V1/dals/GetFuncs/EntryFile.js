// import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';
import { StartFunc as AllDaysOrdersWithQrs } from '../../kLowDb/ReadFileList/AllDaysOrdersWithQrs.js';
import { StartFunc as OrdersDelete } from '../../kLowDb/ReadFileList/OrdersDelete.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return AllDaysOrdersWithQrs({ inBranch, inFromDate, inToDate });
};

let GetOrdersDeleteFunc = async ({ inBranch }) => {
    let LocalFromLowDb = await OrdersDelete({ inBranch });

    return await LocalFromLowDb;
};

export {
    GetFuncs, GetOrdersDeleteFunc
};