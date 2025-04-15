import { StartFunc as DeleteRow } from '../../kLowDb/Delete/DeleteRow.js';

let DeleteFunc = ({ inId, inBranch }) => {
    return DeleteRow({ inId, inBranch });
};

export { DeleteFunc };