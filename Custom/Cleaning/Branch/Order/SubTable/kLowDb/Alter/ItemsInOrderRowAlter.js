import { StartFunc as ReturnDbObjectWithSchema } from '../CommonFuncs/ReturnDbObjectWithSchema.js';

let StartFunc = ({ inDataToInsert, inRow, inId, inBranch }) => {
  let LocalinRow = parseInt(inRow);
  let LocalinId = inId;
  let LoclainBranch = inBranch;
  let LocalRowData = inDataToInsert;
  let LocalReturnData = { KTF: false }

  let LocalMastersCustomersData = ReturnDbObjectWithSchema({ inTable: LoclainBranch });
  let db = LocalMastersCustomersData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  let maxRow;
  let maxPk = -Infinity;

  for (const row of LocalarrayOfObjects) {
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
  Object.assign(LocalData, LocalRowData)
  db.write();
  LocalReturnData.KTF = true;
  return LocalReturnData
};

export { StartFunc };
