import { StartFunc as buildData } from '../../../../CommonFuncs/QrCodesBuildData.js';
import { StartFunc as groupByBranch } from "./GroupByBranch/QrCodesEntryFile.js";

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    return groupByBranch({ inDataAsArray: LocalQrCodeData });
};

export { StartFunc };
