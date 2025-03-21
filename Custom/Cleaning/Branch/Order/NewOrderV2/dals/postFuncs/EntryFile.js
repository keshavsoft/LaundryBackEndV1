import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/WithChecking/StartFunc.js';
import { StartFunc as Settlement } from '../../kLowDb/WriteFile/Settlement/EntryFile.js';

let PostFunc = ({ inMobileNumber, inBranch, inUserName }) => {
    return EntryScan({ inMobile:inMobileNumber, inBranch, inUserName });
};

let PostSettlementFunc = ({ inPostBody, inId, inBranch }) => {
    return Settlement({ inPostBody, inId, inBranch });
};

export { PostFunc, PostSettlementFunc };