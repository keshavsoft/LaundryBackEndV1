import { StartFunc as OrderPaymetsReports } from '../Common/EntryPayment.js';

const StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    const LocalQrCodeData = OrderPaymetsReports({ inBranch, inFromDate, inToDate });

        return LocalQrCodeData;
};

export { StartFunc };
