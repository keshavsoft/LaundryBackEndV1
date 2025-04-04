// import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';
import { StartFunc as AllDaysOrdersWithQrs } from '../../kLowDb/ReadFileList/AllDaysOrdersWithQrs.js';
import { StartFunc as OrdersDelete } from '../../kLowDb/ReadFileList/OrdersDelete.js';
import { StartFunc as StartFuncFromGetAllItems } from '../../kLowDb/ReadFromFile/AllItems.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return AllDaysOrdersWithQrs({ inBranch, inFromDate, inToDate });
};

let GetOrdersDeleteFunc = async ({ inBranch }) => {
    let LocalFromLowDb = await OrdersDelete({ inBranch });

    return await LocalFromLowDb;
};

let GetAllItemsFunc = async ({ inBranch, inFromDate, inToDate }) => {
	let LocalFromLowDb = await StartFuncFromGetAllItems({ inBranch, inFromDate, inToDate });

	return await LocalFromLowDb;
};

export {
    GetFuncs, GetOrdersDeleteFunc,
	GetAllItemsFunc
};