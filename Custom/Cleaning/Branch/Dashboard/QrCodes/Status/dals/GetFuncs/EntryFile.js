import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/TodayAllQrCodes.js';
import { StartFunc as FactoryQrCodes } from '../../kLowDb/ReadFromFile/FactoryQrCodes.js';

let GetAllFuncs = ({ inBranch }) => {
    return TodayAllQrCodes({ inBranch });
};

let GetFactoryFuncs = ({ inFactory }) => {
    return FactoryQrCodes({ inFactory });
};
export {
    GetAllFuncs, GetFactoryFuncs
};