import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/TodayOrdersWithQrs.js';

let GetFuncs = ({ inBranch }) => {
    return TodayOrdersWithQrs({ inBranch });
};

export {
    GetFuncs
};