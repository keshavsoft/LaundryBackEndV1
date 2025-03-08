import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Orders/EntryOrders.js';

let StartFunc = ({ inBranch, fromDate, toDate }) => {
    let LocalBranchName = inBranch;
    let LocalfromDate = fromDate;
    let LocaltoDate = toDate;

    const Orderdb = StartFuncCommonFuncs({ inBranch: LocalBranchName, inFromDate: LocalfromDate, inToDate: LocaltoDate });
    
    return {
        KTF: true,
        JsonData: Orderdb
    };
};
export { StartFunc };
// StartFunc({ inBranch:"BranOrdersKKD", fromDate:"08-03-2025", toDate:"08-03-2025" });
