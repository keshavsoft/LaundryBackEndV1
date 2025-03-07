import { StartFunc as ItemsDeleteRow } from '../../kLowDb/Delete/ItemDeleteRow.js';
import { StartFunc as AddOnDeleteRow } from '../../kLowDb/Delete/AddOnDeleteRow.js';

let mainTableDeleteFunc = ({ inId, inSubId, inBranch }) => {

    return ItemsDeleteRow({ inId, inSubId, inBranch });
};
let addOnTableDeleteFunc = ({ inId, inBranch, inmainId, AddOnKey }) => {

    return AddOnDeleteRow({ inId, inBranch, inmainId, AddOnKey });
};

export { mainTableDeleteFunc, addOnTableDeleteFunc };