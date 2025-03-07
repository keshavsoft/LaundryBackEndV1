import { StartFunc as OrderPaymetsReports } from '../Common/EntryPayment.js';

const StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalQrCodeData = OrderPaymetsReports({ inBranch, inFromDate, inToDate });
    LocalQrCodeData = LocalQrCodeData.filter(ele => ele.CashAmount > 0)

    return LocalQrCodeData;
        
};

export { StartFunc };
