// import { StartFunc as PullData } from "../../../../../../../../../../binV4/EntryScan/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as PullData } from "../../../../../../../../../../../binV4/BranToFactFScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
    return PullData();
};

export { StartFunc };
