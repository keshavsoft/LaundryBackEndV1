import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = ({ inKey, inValue }) => {
  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  if ("error" in LocalStartFuncPullData) {
    LocalReturnData.KReason = LocalStartFuncPullData.error;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  db.read();
  let localFilter = db.data.filter(el => el[inKey] == inValue).length;

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = localFilter;

  return LocalReturnData;
};

export { StartFunc };
