import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/WithChecking/StartFunc.js';
import { StartFunc as Settlement } from '../../kLowDb/WriteFile/Settlement/EntryFile.js';

let PostFunc = ({ inCustomerName, inMobileNumber, inBranch, inPostBody }) => {
    return EntryScan({ inCustomerName, inMobileNumber, inBranch, inDataToInsert: inPostBody });
};

let PostSettlementFunc = ({ inPostBody, inId, inBranch }) => {
    return Settlement({ inPostBody, inId, inBranch });
};
export { PostFunc, PostSettlementFunc };