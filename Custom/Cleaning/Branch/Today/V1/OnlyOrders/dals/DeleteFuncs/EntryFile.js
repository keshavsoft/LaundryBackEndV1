import { StartFunc as DeleteRow } from '../../kLowDb/ReadFileList/DeleteRow.js';

let DeleteFunc = ({ inId, inBranch }) => {
    return DeleteRow({ inId, inBranch });
};

export { DeleteFunc };