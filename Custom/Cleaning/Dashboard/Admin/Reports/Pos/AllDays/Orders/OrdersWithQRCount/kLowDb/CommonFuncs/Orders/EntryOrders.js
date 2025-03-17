import { StartFunc as CommonAllOrders } from './CommonAllOrders.js';

const StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    const LocalAllOrders = CommonAllOrders();
    let LocalBranchName = inBranch.replace("BranOrders", "")
    const LocalAllOrdersData = LocalAllOrders;

    return inBranch === "BranOrdersAll"
        ? jFLocalAllBranchData(LocalAllOrdersData, inFromDate, inToDate)
        : jFLocalBranchWideData(LocalAllOrdersData, LocalBranchName, inFromDate, inToDate);

};

const jFLocalBranchWideData = (inData, inBranch, inFromDate, inToDate) => {
    return inData
        .filter(e => {
            const itemDate = new Date(e?.OrderData?.Currentdateandtime).toISOString().slice(0, 10).split('-').reverse().join('-');
            return itemDate >= inFromDate && itemDate <= inToDate && e.OrderData.BranchName === inBranch;
        })
        .reverse();
};

const jFLocalAllBranchData = (inData, inFromDate, inToDate) => {
    return inData
        .filter(e => {
            const itemDate = new Date(e?.OrderData?.Currentdateandtime).toISOString().slice(0, 10).split('-').reverse().join('-');
            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .reverse();
};

export { StartFunc };
// StartFunc({ inBranch:"BranOrdersKKD", inFromDate:"08-03-2025", inToDate:"08-03-2025" });
