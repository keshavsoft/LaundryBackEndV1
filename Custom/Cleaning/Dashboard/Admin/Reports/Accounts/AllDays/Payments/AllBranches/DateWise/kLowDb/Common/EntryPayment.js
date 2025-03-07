import { StartFunc as OrderPaymetsReports } from './OrderPaymetsReports.js';

const StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    const LocalQrCodeData = OrderPaymetsReports();

    return inBranch === "All"
        ? jFLocalAllBranchData(LocalQrCodeData, inFromDate, inToDate)
        : jFLocalBranchWideData(LocalQrCodeData, inBranch, inFromDate, inToDate);
        
};

const jFLocalBranchWideData = (inData, inBranch, inFromDate, inToDate) => {
    return inData
        .filter(e => {
            const itemDate = new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-CA');
            return itemDate >= inFromDate && itemDate <= inToDate && e.OrderData.BranchName === inBranch;
        })
        .reverse();
};

const jFLocalAllBranchData = (inData, inFromDate, inToDate) => {
    return inData
        .filter(e => {
            const itemDate = new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-CA');
            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .reverse();
};

export { StartFunc };
// StartFunc({ inBranch:"All", inFromDate:"08-02-2025", inToDate:"18-02-2025" });
