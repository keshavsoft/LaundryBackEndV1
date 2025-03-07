import { StartFunc as StartFuncFromGetOrderDasboard } from '../../kLowDb/ReadFromFile/GetOrderDasboardFunc.js';
import { StartFunc as StartFuncFromGetToday } from '../../kLowDb/ReadFromFile/Today.js';
import { StartFunc as StartFuncFromGetAllOrders } from '../../kLowDb/ReadFromFile/AllOrders.js';
// import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFileList/ToadyQrAllReports.js';

let GetAllFuncs = () => {
    return "From Dal"
    // return ToadyQrAllReports({ inBranch });
};


let GetOrderDasboardFunc = async () => {
    let LocalFromLowDb = await StartFuncFromGetOrderDasboard();

    return await LocalFromLowDb;
};
let GetTodayFunc = async ({ inBranch }) => {
    let LocalFromLowDb = await StartFuncFromGetToday({ inBranch });

    return await LocalFromLowDb;
};

let GetAllOrdersFunc = async ({ inBranch }) => {
    let LocalFromLowDb = await StartFuncFromGetAllOrders({ inBranch });

    return await LocalFromLowDb;
};

export {
    GetAllFuncs,GetOrderDasboardFunc,GetTodayFunc,
    GetAllOrdersFunc
};