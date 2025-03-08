import { StartFunc as UpComingOrders } from '../../kLowDb/ReadFileList/UpComingOrders.js';

let GetFuncs = ({ inBranch, fromDate, toDate  }) => {
    return UpComingOrders({ inBranch, fromDate, toDate  });
};

export {
    GetFuncs
};