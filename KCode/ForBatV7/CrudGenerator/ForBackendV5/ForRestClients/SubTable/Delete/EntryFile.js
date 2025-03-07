import { StartFunc as StartFuncDeleteEndPoints } from "./DeleteEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    StartFuncDeleteEndPoints({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };