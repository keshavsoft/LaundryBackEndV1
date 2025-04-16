import { StartFunc as StartFuncPullData } from '../CommonFuncs/MastersItems.js';

let StartFunc = ({ inFilterKey, inFilterValue }) => {
  let LocalinKey = inFilterKey;
  let LocalValue = inFilterValue;

  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  let LocalFindId = LocalStartFuncPullData.filter(e => e[LocalinKey] == LocalValue);

  if (LocalFindId.length === 0) {
    LocalReturnData.KReason = "No Data"
    return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFindId;

  return  LocalReturnData;
};

export { StartFunc };
