import { StartFunc as AllOrdersWithQr } from '../../kLowDb/ReadFileList/AllOrdersWithQr.js';

let GetFuncs = ({ inBranch, fromDate, toDate  }) => {
    return AllOrdersWithQr({ inBranch, fromDate, toDate  });
};

export {
    GetFuncs
};