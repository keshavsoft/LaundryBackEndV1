import { StartFunc as StartFuncCommonFuncs } from '../kLowDb/CommonFuncs/CustomeTable.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalBranchName = inBranch;
    let LocalModifiedBranch = LocalBranchName.replace("BranOrders", "");
    let LocalReturnData = { KTF: false };

    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });

    let LocalFilterBranchData = Orderdb.filter(e => {
        return e.OrderData.BranchName === LocalModifiedBranch;
    });

    if (LocalFilterBranchData.length === 0) {
        LocalReturnData.KReason = "No Data";
        return LocalReturnData;
    }

    let LocalItemWise = LocalItemWiseFunc({ inOrderData: LocalFilterBranchData });

    LocalReturnData.KTF = true;
    return jFLocalBranchWideData({ inData: LocalItemWise, inBranch, inFromDate, inToDate });
};

const jFLocalBranchWideData = ({ inData, inBranch, inFromDate, inToDate }) =>
    inData
        .filter(e => {
            const itemDate = new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB').split('/').join('-');
            return itemDate >= inFromDate && itemDate <= inToDate && e.OrderData.BranchName === inBranch.replace("BranOrders", "");
        })
        .reverse();

const LocalItemWiseFunc = ({ inOrderData }) => {
    let jvarLocalDataArray = [];
    inOrderData.forEach(element => {
        Object.values(element.ItemsInOrder).forEach(function (key) {
            key.pk = element.pk;
            key.OrderData = element.OrderData;
            jvarLocalDataArray.push(key);
        });
    });
    return jvarLocalDataArray;
};

export { StartFunc };
// StartFunc({ inBranch: "BranOrdersKKD", inFromDate: "15-04-2025", inToDate: "15-04-2025" });
