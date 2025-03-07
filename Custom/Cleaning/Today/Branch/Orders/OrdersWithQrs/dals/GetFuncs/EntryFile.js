import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';
import { StartFunc as AllDaysOrdersWithQrs } from '../../kLowDb/ReadFileList/AllDaysOrdersWithQrs.js';

let GetFuncs = ({ inBranch }) => {
    return AllDaysOrdersWithQrs({ inBranch });
};

let GetTodayFuncs = ({ inBranch }) => {
    return TodayOrdersWithQrs({ inBranch });
};

export {
    GetFuncs, GetTodayFuncs
};