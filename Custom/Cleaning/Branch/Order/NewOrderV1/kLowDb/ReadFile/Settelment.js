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
    const LocalcalculateSettlement = calculateGST({ rate: LocalItemsTotal, gstRate: "18" });

    return {
        KTF: true,
        JsonData: {
            CustomerName: LocalRowFind.CustomerData?.CustomerName,
            Mobile: LocalRowFind.CustomerData?.CustomerMobile,
            BranchName: LocalRowFind.OrderData?.BranchName,
            Rate: LocalItemsTotal,
            Date: new Date(LocalRowFind?.DateTime).toLocaleDateString('en-GB'),
            OrderNumber: LocalRowFind.pk,
            CheckOutData: LocalCheckOutData,
            CGST: LocalcalculateSettlement?.cgst,
            SGST: LocalcalculateSettlement?.sgst,
            TotalAmt: LocalcalculateSettlement?.totalAmt,
            RoundOffAmt: LocalcalculateSettlement?.RoundOffAmt,
            RoundedTotal: LocalcalculateSettlement?.roundedTotal

        }
    }
};

function calculateGST({ rate, gstRate }) {
    const halfGstRate = parseInt(gstRate) / 2;
    const LocalRate = parseInt(rate);
    const cgst = (LocalRate * halfGstRate / 100).toFixed(2);
    const sgst = (LocalRate * halfGstRate / 100).toFixed(2);
    const totalAmt = (LocalRate + parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
    const roundedTotal = Math.round(totalAmt);
    const roundOffAmt = (roundedTotal - totalAmt).toFixed(2);

    return {
        cgst: cgst,
        sgst: sgst,
        totalAmt: totalAmt,
        RoundOffAmt: roundOffAmt,
        roundedTotal: roundedTotal
    };
}

export { StartFunc };
// export  StartFunc({ inBranch:"BranOrdersKKD", inRow:6 });
