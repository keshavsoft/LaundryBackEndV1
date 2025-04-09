import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';
import { StartFunc as ToadyCashReports } from '../../kLowDb/ReadFileList/ToadyCashReports.js';
import { StartFunc as ToadyCardReports } from '../../kLowDb/ReadFileList/ToadyCardReports.js';
import { StartFunc as ToadyUpiReports } from '../../kLowDb/ReadFileList/ToadyUpiReports.js';

let GetFuncs = ({ inBranch }) => {
    return ToadyOrdersReports({ inBranch });
};

let GetCashFuncs = ({ inBranch }) => {
    return ToadyCashReports({ inBranch });
};

let GetCardFuncs = ({ inBranch }) => {
    return ToadyCardReports({ inBranch });
};

let GetUpiFuncs = ({ inBranch }) => {
    return ToadyUpiReports({ inBranch });
};

export {
    GetFuncs, GetCardFuncs, GetUpiFuncs, GetCashFuncs
};