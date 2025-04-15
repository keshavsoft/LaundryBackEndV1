import { StartFunc as StartFuncFromGetNoSettlement } from '../../kLowDb/getNoSettlement.js';
import { StartFunc as StartFuncFromGetItemsOnly } from '../../kLowDb/AllItems.js';
import { StartFunc as StartFuncFromGetOrderFromToDate } from '../../kLowDb/AllDaysOrdersWithQrs.js';

let GetNoSettlementFunc = ({ inBranch }) => {
    let LocalFromLowDb = StartFuncFromGetNoSettlement({ inBranch });

    return LocalFromLowDb;
};

let GetItemsOnlyFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalFromLowDb = StartFuncFromGetItemsOnly({ inBranch, inFromDate, inToDate });

    return LocalFromLowDb;
};

let GetOrderFromToDateFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalFromLowDb = StartFuncFromGetOrderFromToDate({ inBranch, inFromDate, inToDate });

    return LocalFromLowDb;
};

export {
    GetNoSettlementFunc,
    GetItemsOnlyFunc,
    GetOrderFromToDateFunc
};