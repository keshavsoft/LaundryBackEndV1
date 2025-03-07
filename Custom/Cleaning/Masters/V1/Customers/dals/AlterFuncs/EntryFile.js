import { StartFunc as RowAlterbyPk } from '../../kLowDb/Alter/RowAlterbyPk.js';

let AlterFunc = ({ inId, inRowData }) => {
    return RowAlterbyPk({ inId, inRowData });
};

export { AlterFunc };