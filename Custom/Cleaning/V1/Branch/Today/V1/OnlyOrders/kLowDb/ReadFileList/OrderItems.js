import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/CustomeTable.js';

let StartFunc = ({ inBranch }) => {
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    let LocalBranchName = inBranch;
    let LocalModifiedBranch = LocalBranchName.replace("BranOrders", "")
    let LocalReturnData = { KTF: false }

    const OrderData = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    
    let LocalFilterBranchData = OrderData.filter(e => {
        return new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue && e.OrderData.BranchName === LocalModifiedBranch;
    });

    if (LocalFilterBranchData.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };
    let LocalItemWise = LocalItemWiseFunc({ inOrderData: LocalFilterBranchData });

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalItemWise.slice().reverse();

    return LocalReturnData;
};

const LocalItemWiseFunc = ({ inOrderData }) => {
    let jvarLocalDataArray = [];
    inOrderData.forEach(element => {
        Object.values(element.ItemsInOrder).forEach(function (key) {
            key.pk = element.pk;
            jvarLocalDataArray.push(key);
        });
    });
    return jvarLocalDataArray;

};

export { StartFunc };
// StartFunc({ inBranch: "BranOrdersKKD" })
