import { StartFunc as StartFuncReturnDbObject } from "../CommonFuncs/ReturnDbObjectWithSchema.js";

let StartFunc = async ({ inBranch, inId, inSubId }) => {
  let LocalBranch = inBranch;
  let LocalId = parseInt(inId);
  const LocalKey = "ItemsInOrder";
  const LocalSubId = parseInt(inSubId);

  let LocalStartFuncPullData = StartFuncReturnDbObject({ inTable: LocalBranch });

  const db = LocalStartFuncPullData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  // Find the last object in the array
  let LocalFindId = LocalarrayOfObjects[LocalarrayOfObjects.length - 1];

  if (LocalFindId.UuId !== LocalId) {
    return { KTF: false, KReason: `Id : ${LocalId} not Last Order data` };
  };

  if (!LocalFindId) {
    return { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  }

  if (!(LocalKey in LocalFindId)) {
    return { KTF: false, KReason: `Key : ${LocalKey} not found in Row` };
  }

  if (!(LocalSubId in LocalFindId[LocalKey])) {
    return { KTF: false, KReason: `SubId : ${LocalSubId} not found in Row:Key` };
  }

  // Remove related AddOnData
  for (let key in LocalFindId.AddOnData) {
    if (LocalFindId.AddOnData[key].AddOnItemSerial === LocalSubId) {
      delete LocalFindId.AddOnData[key];
    }
  }

  // Remove specified item from ItemsInOrder
  delete LocalFindId[LocalKey][LocalSubId];

  db.write();

  return { KTF: true };
};

export { StartFunc };
