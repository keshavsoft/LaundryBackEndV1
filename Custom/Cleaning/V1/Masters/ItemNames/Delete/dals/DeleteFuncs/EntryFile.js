import { StartFunc as RowDeletebyPk } from '../../kLowDb/Delete/RowDeletebyPk.js';

let DeleteFunc = ({ inId }) => {
    return RowDeletebyPk({inId});
};

export { DeleteFunc };