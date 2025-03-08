// import { StartFunc as FactoryToBranchScan } from "../../../../../../../../../binV4/CompletionScan/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as FactoryToBranchScan } from "../../../../../../../../../binV4/CompletionScan/CommonPull/kLowDb/PullData/returnAsArray.js";
let StartFunc = ({ inVouherPk }) => {
    let LocalReturnData = FactoryToBranchScan();

    let LocalFilteredArray = LocalReturnData.filter(element => {
        return element.VoucherRef == inVouherPk;
    });

    return LocalFilteredArray;
};

export { StartFunc };