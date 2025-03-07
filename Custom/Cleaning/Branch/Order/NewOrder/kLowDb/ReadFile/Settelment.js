import { StartFunc as StartFuncPullData } from "../CommonFuncs/CutomTable.js";

const StartFunc = ({ inBranch, inRow }) => {
    let LocalReturnData = { KTF: false };
    let LocalStartFuncPullData = StartFuncPullData({ inTable: inBranch });

    if (!LocalStartFuncPullData.KTF) {
        return { ...LocalReturnData, KReason: LocalStartFuncPullData.KReason };
    };

    const db = LocalStartFuncPullData.JsonData;
    let LocalRowFind = db.find(element => element.pk === parseInt(inRow));

    if (!LocalRowFind) {
        return { ...LocalReturnData, KReason: "No Data" };
    };
    let LocalCheckOutData = LocalRowFind ? LocalRowFind.CheckOutData[1] : {};

    let LocalItemsTotal = Object.values(LocalRowFind?.ItemsInOrder)
        .map(el => el.Total)
        .reduce((a, b) => a + parseInt(b), 0);

    return {
        KTF: true,
        JsonData: {
            CustomerName: LocalRowFind.CustomerData?.CustomerName,
            Mobile: LocalRowFind.CustomerData?.CustomerMobile,
            BranchName: LocalRowFind.OrderData?.BranchName,
            Rate: LocalItemsTotal,
            Date: new Date(LocalRowFind?.DateTime).toLocaleDateString('en-GB'),
            OrderNumber: LocalRowFind.pk,
            CheckOutData: LocalCheckOutData
        }
    };
};

export { StartFunc };
