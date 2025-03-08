// import { StartFunc as PullData } from "../../../../../../../binV4/Press_ReWashScan/Show/kLowDb/PullData/returnAsArray.js";
import { StartFunc as PullData } from "../../../../../../../binV4/Press_ReWashScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
    return PullData();
};

export { StartFunc };
