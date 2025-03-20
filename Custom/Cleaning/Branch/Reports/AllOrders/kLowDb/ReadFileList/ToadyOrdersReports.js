import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalBranchName = inBranch;
    let LocalReturnData = { KTF: false };

    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    Orderdb.read();

    if (Orderdb.data.length === 0) {
        LocalReturnData.KReason = "No Data";
        return LocalReturnData;
    }
    LocalReturnData.KTF = true;
    return jFLocalBranchWideData({ inData: Orderdb.data, inFromDate, inToDate });
};

const jFLocalBranchWideData = ({ inData, inFromDate, inToDate }) =>
    inData
        .filter(e => {
            const itemDate = new Date(e.OrderData.Currentdateandtime).toISOString().slice(0, 10).split('-').reverse().join('-');

            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .reverse();

export { StartFunc };
