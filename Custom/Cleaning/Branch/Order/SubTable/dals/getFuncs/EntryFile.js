import { StartFunc as ItemsInOrderRow } from '../../kLowDb/ReadFile/ItemsInOrderRow.js';
import { StartFunc as inRowOrder } from '../../kLowDb/ReadFile/inRow.js';

let GetFunc = ({ inRow, inId, inBranch }) => {

    let LocalFromLowDb = ItemsInOrderRow({ inRow, inId, inBranch });

    return LocalFromLowDb;
};

let GetOrderShowFunc = ({ inBranch, inRow }) => {

    let LocalFromLowDb = inRowOrder({ inBranch, inRow });

    return LocalFromLowDb;
};

export { GetFunc, GetOrderShowFunc };