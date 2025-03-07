import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';
import { StartFunc as OrderItems } from '../../kLowDb/ReadFileList/OrderItems.js';
import { StartFunc as OrdersDelete } from '../../kLowDb/ReadFileList/OrdersDelete.js';

let GetFuncs = ({ inBranch }) => {
    return ToadyOrdersReports({ inBranch });
};

let GetItemsFuncs = ({ inBranch }) => {
    return OrderItems({ inBranch });
};

let GetOrdersDeleteFunc = async ({ inBranch }) => {
    let LocalFromLowDb = await OrdersDelete({ inBranch });

    return await LocalFromLowDb;
};

export {
    GetFuncs, GetItemsFuncs,
    GetOrdersDeleteFunc
};