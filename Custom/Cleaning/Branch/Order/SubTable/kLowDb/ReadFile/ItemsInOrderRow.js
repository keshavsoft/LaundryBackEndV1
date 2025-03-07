import { StartFunc as StartFuncPullData } from "../CommonFuncs/CutomTable.js";

let StartFunc = ({ inRow, inId, inBranch }) => {
    let LocalReturnData = { KTF: false };
    let LocalinRow = parseInt(inRow);
    let LocalinId = inId;
    let LoclainBranch = inBranch;

    let LocalStartFuncPullData = StartFuncPullData({ inTable: LoclainBranch });

    if (LocalStartFuncPullData.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };
    const db = LocalStartFuncPullData.JsonData;

    if (db.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    let maxRow;
    let maxPk = -Infinity;

    for (const row of db) {
        if (row.pk > maxPk) {
            maxPk = row.pk;
            maxRow = row;
        }
    };

    if (maxRow.pk !== LocalinRow) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    let LocalData = maxRow.ItemsInOrder[LocalinId];
    LocalReturnData.JsonData = { ...LocalData, SubKey: LocalinId };
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };