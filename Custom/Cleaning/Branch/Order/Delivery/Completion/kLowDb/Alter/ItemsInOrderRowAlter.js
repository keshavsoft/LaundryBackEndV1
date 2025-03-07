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

  let LocalFind = LocalarrayOfObjects.find(el => el.pk === LocalinRow);
  if (!LocalFind) {
    LocalReturnData.KReason = "No Data"
    return LocalReturnData;
  }
  LocalReturnData.ReCheckOutData = {};
  LocalReturnData.ReCheckOutData.pk = LocalinRow;
  let LocalData = LocalFind.ItemsInOrder[LocalinId];
  Object.assign(LocalData, LocalRowData)
  db.write();
  LocalReturnData.KTF = true;
  return LocalReturnData
};

export { StartFunc };
