import { StartFunc as TodayAllDcs } from '../../kLowDb/ReadFromFile/DcsDashBoard.js';

let GetAllFuncs = () => {
    return TodayAllDcs();
};

export {
    GetAllFuncs
};