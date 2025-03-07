import { StartFunc as MaxRow } from '../../kLowDb/ReadFile/MaxRow.js';
import { StartFunc as inRowOrder } from '../../kLowDb/ReadFile/inRow.js';
import { StartFunc as Settelment } from '../../kLowDb/ReadFile/Settelment.js';

let GetFunc = ({ inBranch }) => {

    let LocalFromLowDb = MaxRow({ inBranch });

    return LocalFromLowDb;
};

let GetOrderShowFunc = ({ inBranch, inRow }) => {

    let LocalFromLowDb = inRowOrder({ inBranch, inRow });

    return LocalFromLowDb;
};

let GetRowSettlementFunc = ({ inBranch, inRow }) => {

    let LocalFromLowDb = Settelment({ inBranch, inRow });

    return LocalFromLowDb;
};
export { GetFunc, GetOrderShowFunc,GetRowSettlementFunc };