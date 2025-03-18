import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';
import { StartFunc as OrderItems } from '../../kLowDb/ReadFileList/OrderItems.js';
import { StartFunc as OrdersDelete } from '../../kLowDb/ReadFileList/OrdersDelete.js';
import { StartFunc as Billprint } from '../../kLowDb/ReadFileList/Billprint.js';
import { StartFunc as AllBillprint } from '../../kLowDb/ReadFileList/AllBillprint.js';

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

let GetBillPrintFunc = async ({ inId,inBranch }) => {
    let LocalFromLowDb = await Billprint({ inId,inBranch });

    return await LocalFromLowDb;
};

let GetAllBillPrintFunc = async ({ inId,inBranch }) => {
    let LocalFromLowDb = await AllBillprint({ inId,inBranch });

    return await LocalFromLowDb;
};
export {
    GetFuncs, GetItemsFuncs,
    GetOrdersDeleteFunc,GetBillPrintFunc,GetAllBillPrintFunc
};