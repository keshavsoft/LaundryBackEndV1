import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';
import { StartFunc as OrderItems } from '../../kLowDb/ReadFileList/OrderItems.js';

let GetFuncs = ({ inBranch, fromDate, toDate  }) => {
    return ToadyOrdersReports({ inBranch, fromDate, toDate  });
};

let GetItemsFuncs = ({ inBranch }) => {
    return OrderItems({ inBranch });
};

export {
    GetFuncs, GetItemsFuncs
};