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
            let itemDate = Object.values(e?.ItemsInOrder)[0]?.DeliveryDateTime.split('-').reverse().join('-');
            return itemDate >= inFromDate && itemDate <= inToDate && e.OrderData.BranchName === inBranch;
        })
        .reverse();
};

const jFLocalAllBranchData = (inData, inFromDate, inToDate) => {
    return inData
        .filter(e => {
            let itemDate = Object.values(e?.ItemsInOrder)[0]?.DeliveryDateTime.split('-').reverse().join('-');
            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .reverse();
};

export { StartFunc };
// StartFunc({ inBranch: "BranOrdersKKD", inFromDate: "17-03-2025", inToDate: "17-03-2025" });
