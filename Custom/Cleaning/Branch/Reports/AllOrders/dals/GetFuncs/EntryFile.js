import { StartFunc as OrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';
import { StartFunc as OrderItems } from '../../kLowDb/ReadFileList/OrderItems.js';
import { StartFunc as UpComingDelivery } from '../../kLowDb/ReadFileList/UpComingDelivery.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return OrdersReports({ inBranch, inFromDate, inToDate });
};

let GetItemsFuncs = ({ inBranch }) => {
    return OrderItems({ inBranch });
};

let GetGetUpComingDeliveryFunc = async ({ inBranch, inFromDate, inToDate }) => {
    let LocalFromLowDb = await UpComingDelivery({ inBranch, inFromDate, inToDate });

    return await LocalFromLowDb;
};

export {
    GetFuncs, GetItemsFuncs,
    GetGetUpComingDeliveryFunc
};