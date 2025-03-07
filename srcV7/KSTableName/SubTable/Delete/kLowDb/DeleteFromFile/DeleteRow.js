// import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";
import { StartFunc as StartFuncReturnDbObject } from "../../../../CommonPull/kLowDb/CommonFuncs/ReturnDbObject.js";

let StartFunc = async ({ inId, inKey, inSubId }) => {
  // router.delete('/:Id/:inKey/:SubId', DeleteFuncmiddleware, DeleteFunc);
  let LocalId = parseInt(inId);
  const LocalKey = inKey;
  const LocalSubId = inSubId;

  let LocalStartFuncPullData = StartFuncReturnDbObject();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.UuId === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  };

  if (LocalKey in LocalFindId === false) {
    return await { KTF: false, KReason: `Key : ${LocalKey} not found in Row` };
  };

  if (LocalSubId in LocalFindId[LocalKey] === false) {
    return await { KTF: false, KReason: `SubId : ${LocalSubId} not found in Row:Key` };
  };

  delete LocalFindId[LocalKey][LocalSubId];

  db.write();

  return await true;
};

export { StartFunc };
