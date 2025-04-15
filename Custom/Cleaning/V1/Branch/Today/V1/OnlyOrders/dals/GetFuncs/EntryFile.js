import { StartFunc as Orders } from '../../kLowDb/ReadFileList/Orders.js';
import { StartFunc as OrderItems } from '../../kLowDb/ReadFileList/OrderItems.js';
import { StartFunc as Billprint } from '../../kLowDb/ReadFileList/Billprint.js';
import { StartFunc as StartFuncFromGetNoSettlement } from '../../kLowDb/ReadFileList/getNoSettlement.js';

let GetFuncs = ({ inBranch }) => {
    return Orders({ inBranch });
};

let GetItemsFuncs = ({ inBranch }) => {
    return OrderItems({ inBranch });
};

let GetBillPrintFunc = async ({ inId, inBranch }) => {
    let LocalFromLowDb = await Billprint({ inId, inBranch });

    return await LocalFromLowDb;
};

let GetNoSettlementFunc = ({ inBranch }) => {
    let LocalFromLowDb = StartFuncFromGetNoSettlement({ inBranch });

    return LocalFromLowDb;
};

export {
    GetFuncs, GetItemsFuncs,
    GetBillPrintFunc,
    GetNoSettlementFunc
};