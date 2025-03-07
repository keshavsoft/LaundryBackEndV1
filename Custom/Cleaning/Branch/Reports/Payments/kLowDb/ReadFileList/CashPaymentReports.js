import { StartFunc as PaymentReports } from '../CommonFuncs/PaymentReports.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalPaymentReports = PaymentReports({ inBranch, inFromDate, inToDate });
    LocalPaymentReports = LocalPaymentReports.filter(ele => ele.CashAmount > 0);

    return LocalPaymentReports;
};

export { StartFunc };
