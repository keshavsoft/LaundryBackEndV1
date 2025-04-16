import { StartFunc as MastersAddOns } from '../CommonFuncs/MastersAddOns.js';

let StartFunc = async ({ inId, inRowData }) => {
  let LocalId = parseInt(inId);
  let LocalRowData = inRowData;

  let LocalMastersAddOnsData = MastersAddOns();
  let db = LocalMastersAddOnsData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  let LocalFindId = LocalarrayOfObjects.find((obj) => obj.pk === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  };
  Object.assign(LocalFindId, LocalRowData)
  db.write();

  return await true;
};

export { StartFunc };
