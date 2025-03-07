import { StartFunc as newBbuildData } from '../../../../CommonFuncs/CommonAllOrders.js';

let StartFunc = () => {
    const LocalNewQrCodeData = newBbuildData();
    const jVarLocalTransformedData = jFLocalSettlementFunc(LocalNewQrCodeData);
    const LocalInsertAggValues = jFLocalInsertQrCodeData(jVarLocalTransformedData);
    return LocalInsertAggValues;
};

const jFLocalSettlementFunc = inData => {
    return Object.entries(inData).map(([key, value]) => {
        if (Object.values(value?.CheckOutData)[0]) {
            value.IsSettled = false;
            value.TotalPcs = Object.values(value.ItemsInOrder).reduce((acc, p) => acc + parseInt(p.Pcs), 0);
            value.DiscountPer = Object.values(value.CheckOutData)[0].DiscountPer;
            value.DiscountAmount = Object.values(value.CheckOutData)[0].GstData.DiscountAmount;
            value.CardAmount = Object.values(value.CheckOutData)[0].CardAmount;
            value.CashAmount = Object.values(value.CheckOutData)[0].CashAmount;
            value.UPIAmount = Object.values(value.CheckOutData)[0].UPIAmount;
            value.TotalAmount = value.CardAmount + value.CashAmount + value.UPIAmount;
        }
        if (Object.keys(value.CheckOutData).length > 0) {
            value.IsSettled = true;
        }
        delete value.ItemsInOrder;
        delete value.AddOnData;
        delete value.CheckOutData;

        return value;
    });
};

const jFLocalInsertQrCodeData = (inOrderData) => {
    return inOrderData.map(element => {
        element.IsQrCodesRaised = false;
        element.TotalItems = 0;
        // Add additional QR code data processing if necessary
        return element;
    });
};

export { StartFunc };
// StartFunc();
