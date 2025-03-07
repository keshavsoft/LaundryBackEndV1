import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';
import { StartFunc as groupByBranch } from "./GroupByBranch/entryFile.js";

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    return groupByBranch({ inDataAsArray: LocalQrCodeData });
};

export { StartFunc };
