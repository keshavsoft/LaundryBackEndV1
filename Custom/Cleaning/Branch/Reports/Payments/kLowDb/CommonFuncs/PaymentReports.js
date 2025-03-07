import { StartFunc as StartFuncCommonFuncs } from './Transactions.js';
import { StartFunc as StartFuncQrCodes } from './QrCodes.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalBranchName = inBranch;

    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    Orderdb.read();

    const Qrdb = StartFuncQrCodes();
    Qrdb.read();

    let jVarLocalTransformedData = jFLocalSettlementFunc({ inData: Orderdb.data });
    let LocalInsertAggValues = jFLocalInsertQrCodeData({ inBranchName: LocalBranchName, inOrderData: jVarLocalTransformedData, inQrCodeData: Qrdb.data });

    // Wrap the result in an object to avoid "filter is undefined" issue
    return  jFLocalBranchWideData({ inData: LocalInsertAggValues, inFromDate, inToDate }) ;
};

const jFLocalBranchWideData = ({ inData, inFromDate, inToDate }) =>
    inData
        .filter(e => {
            const itemDate = new Date(e.OrderData.Currentdateandtime).toISOString().slice(0, 10).split('-').reverse().join('-');
            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .reverse();

let jFLocalSettlementFunc = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {
        if (Object.values(element[1].CheckOutData)[0]) {
            element[1].IsSettled = false;
            element[1].TotalPcs = Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + parseInt(val), 0);
            element[1].DiscountPer = Object.values(element[1].CheckOutData)[0].DiscountPer;
            element[1].DiscountAmount = Object.values(element[1].CheckOutData)[0].GstData.DiscountAmount;
            element[1].CardAmount = Object.values(element[1].CheckOutData)[0].CardAmount;
            element[1].CashAmount = Object.values(element[1].CheckOutData)[0].CashAmount;
            element[1].UPIAmount = Object.values(element[1].CheckOutData)[0].UPIAmount;
            element[1].TotalAmount = element[1].CardAmount + element[1].CashAmount + element[1].UPIAmount;
        }
        if (Object.keys(element[1].CheckOutData).length > 0) {
            element[1].IsSettled = true;
        }
        delete element[1].ItemsInOrder;
        delete element[1].AddOnData;
        delete element[1].CheckOutData;

        return element[1];
    });

    return jVarLocalReturnObject;
};

let jFLocalInsertQrCodeData = ({ inBranchName, inOrderData, inQrCodeData }) => {
    let jVarLocalReturnArray = [];
    inOrderData.forEach(element => {
        element.IsQrCodesRaised = false;
        element.TotalItems = 0;
        if (Array.isArray(inQrCodeData)) {
            let FilterCheck = inQrCodeData.filter(ele => ele.OrderNumber == element.pk && ele.BookingData.OrderData.BranchName == inBranchName);
            if (FilterCheck.length > 0) {
                element.TotalItems = FilterCheck.length;
                element.IsQrCodesRaised = true;
            }
        }
        if (element.IsSettled) {
            jVarLocalReturnArray.push(element);
        }
    });

    return jVarLocalReturnArray;
};

export { StartFunc };
