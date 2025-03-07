import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';

let StartFunc = ({ inBranch, fromDate, toDate }) => {

    let LocalBranchName = inBranch;
    let LocalReturnData = { KTF: false }

    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    Orderdb.read();

    if (Orderdb.data.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;

    return jFLocalBranchWideData({ inData: Orderdb.data, fromDate, toDate });
};


const jFLocalBranchWideData = ({ inData, fromDate, toDate }) =>
    inData
        .filter(e => {
            let itemDate = Object.values(e.ItemsInOrder)[0].DeliveryDateTime.split('-').reverse().join('-');
            return itemDate >= fromDate && itemDate <= toDate;
        })
        .reverse();

export { StartFunc };
