import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';
import { StartFunc as StartRowDataFuncPullData } from '../../kLowDb/RowCountFilter.js';

let GetFunc = () => {
    return StartFuncPullData();
};

let GetRowWithDataFunc = () => {
    return StartRowDataFuncPullData();
};

export { GetFunc, GetRowWithDataFunc };