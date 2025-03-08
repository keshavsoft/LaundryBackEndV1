// import { StartFunc as CompletionScan } from "../../../../../../../../../binV4/CompletionScan/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as CompletionScan } from "../../../../../../../../../binV4/CompletionScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inVouherPk }) => {
    let LocalReturnData = CompletionScan();

    let LocalFilteredArray = LocalReturnData.filter(element => {
        return element.VoucherRef === inVouherPk;
    });

    return LocalFilteredArray;
};

export { StartFunc };