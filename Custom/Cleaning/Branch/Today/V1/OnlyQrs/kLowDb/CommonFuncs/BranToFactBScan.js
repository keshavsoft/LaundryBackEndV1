// import { StartFunc as PullData } from "../../../../../../../../binV4/BranToFactBScan/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as PullData } from "../../../../../../../../binV4/BranToFactBScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    let LocalQrCodeOriginalData = PullData();

    let LocalFilteredData = LocalQrCodeOriginalData.filter(e => {
        return e.BranchName === LocalBranchName;
    });

    return LocalFilteredData;
};

export { StartFunc };
