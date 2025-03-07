import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/AllPaymentReports.js';
import { StartFunc as CashPaymentReports } from '../../kLowDb/ReadFileList/CashPaymentReports.js';
import { StartFunc as CardPaymentReports } from '../../kLowDb/ReadFileList/CardPaymentReports.js';
import { StartFunc as UPIPaymentReports } from '../../kLowDb/ReadFileList/UPIPaymentReports.js';

let GetFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return ToadyOrdersReports({ inBranch, inFromDate, inToDate });
};

let GetCashFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return CashPaymentReports({ inBranch, inFromDate, inToDate });
};

let GetCardFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return CardPaymentReports({ inBranch, inFromDate, inToDate });
};

let GetUPIFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return UPIPaymentReports({ inBranch, inFromDate, inToDate });
};

export {
    GetFuncs, GetCashFuncs, GetCardFuncs, GetUPIFuncs
};