import { StartFunc as StartFuncPullData } from "../../../../../../../binV4/MastersItemTypes/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
  let LocalReturnData = { KTF: false };

  LocalReturnData.KTF = true;
  let LocalData = StartFuncPullData()
  LocalReturnData.JsonData = LocalData.length;

  return LocalReturnData;
};

export { StartFunc };
