import { StartFunc as StartFuncPullData } from "../../../../../../../binV4/MastersCustomers/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
  let LocalReturnData = { KTF: false };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = StartFuncPullData();

  return LocalReturnData;
};

export { StartFunc };
