import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';

let StartFunc = ({ inBranch, fromDate,toDate }) => {
    // let LocalFindValue = "02/09/2024";
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    let LocalBranchName = inBranch;
    const modifiedBranch = LocalBranchName.replace("BranOrders", "");

    let LocalReturnData = { KTF: false }

    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    Orderdb.read();

    let LocalFilterBranchData = Orderdb.data.filter(e => {
        return new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue && e.OrderData.BranchName === modifiedBranch;
    });

    if (LocalFilterBranchData.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };
    let LocalItemWise = LocalItemWiseFunc({ inOrderData: LocalFilterBranchData });

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalItemWise.slice().reverse();

    return jFLocalBranchWideData({ inData: LocalReturnData, fromDate, toDate });
};

const jFLocalBranchWideData = ({ inData, fromDate, toDate }) =>
    inData
        .filter(e => {
            const itemDate = new Date(e.OrderData.Currentdateandtime.split('/').join('-')).toLocaleDateString('en-GB');
            // console.log("itemDate, inFromDate, inToDate:",itemDate, inFromDate, inToDate);
            
            return itemDate >= fromDate && itemDate <= toDate;
        })
        .reverse();


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
// StartFunc({ inBranch: "ANR" })
