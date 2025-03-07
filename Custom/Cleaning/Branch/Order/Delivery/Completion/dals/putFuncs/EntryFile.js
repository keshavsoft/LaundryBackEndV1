import { StartFunc as EntryScan } from '../../kLowDb/Alter/ItemsInOrderRowAlter.js';

let putFuncs = ({ inBranch, inId, inRow, inPutBody }) => {
    return EntryScan({ inBranch, inId, inRow, inDataToInsert: inPutBody });
};

export { putFuncs };