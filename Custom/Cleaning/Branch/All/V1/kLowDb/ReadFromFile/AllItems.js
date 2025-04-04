import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalBranchName = inBranch;
    let LocalModifiedBranch = LocalBranchName.replace("BranOrders", "");
    let LocalReturnData = { KTF: false };

    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    Orderdb.read();

    let LocalFilterBranchData = Orderdb.data.filter(e => {
        return e.OrderData.BranchName === LocalModifiedBranch;
    });

    if (LocalFilterBranchData.length === 0) {
        LocalReturnData.KReason = "No Data";
        return LocalReturnData;
    }

    let LocalItemWise = LocalItemWiseFunc({ inOrderData: LocalFilterBranchData });

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalItemWise.slice().reverse();
    return jFLocalBranchWideData({ inData: LocalReturnData, inBranch, inFromDate, inToDate });
};

const jFLocalBranchWideData = ({ inData, inBranch, inFromDate, inToDate }) =>
    inData.JsonData
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
// StartFunc({ inBranch: "BranOrdersLBC", inFromDate: "04-04-2025", inToDate: "04-04-2025" });
