import { StartFunc as PaymentReports } from '../CommonFuncs/PaymentReports.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    const LocalPaymentReports = PaymentReports({ inBranch, inFromDate, inToDate });
    return LocalPaymentReports;
};


export { StartFunc };
