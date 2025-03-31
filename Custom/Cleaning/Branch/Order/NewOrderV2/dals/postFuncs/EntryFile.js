import { StartFunc as EntryScan } from '../../kLowDb/WriteFile/NewOrder/StartFunc.js';
import { StartFunc as Settlement } from '../../kLowDb/WriteFile/Settlement/EntryFile.js';
import { StartFunc as NewOrderSubTable } from '../../kLowDb/WriteFile/NewOrderSubTable/StartFunc.js';

let PostFunc = ({ inMobileNumber, inBranch, inUserName }) => {
    return EntryScan({ inMobile: inMobileNumber, inBranch, inUserName });
};

let PostSettlementFunc = ({ inPostBody, inId, inBranch }) => {
    return Settlement({ inPostBody, inId, inBranch });
};

let SubTableFunc = ({ inTable, inPostBody, id, inKey }) => {
    return NewOrderSubTable({ inTable, inPostBody, id, inKey });
};

export { PostFunc, PostSettlementFunc, SubTableFunc };