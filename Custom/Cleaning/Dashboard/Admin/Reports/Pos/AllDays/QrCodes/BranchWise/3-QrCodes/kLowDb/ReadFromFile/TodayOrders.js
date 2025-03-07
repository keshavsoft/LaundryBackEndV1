import { StartFunc as buildData } from '../../../../CommonFuncs/TodayBuildData.js';
import { StartFunc as groupByBranch } from "./GroupByBranch/TodayEntry.js";

let StartFunc = () => {
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    const LocalQrCodeData = buildData();

    let LocalFilterBranchData = LocalQrCodeData.filter(e => {
        return new Date(e.OrderDateTime).toLocaleDateString('en-GB') == LocalFindValue;
    });

    return groupByBranch({ inDataAsArray: LocalFilterBranchData });
};

export { StartFunc };
