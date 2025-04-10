import { StartFunc as StartFuncPullData } from "../../../../../../../binV4/MastersCustomers/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
  let LocalReturnData = { KTF: false };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFuncColumnsNeeded();

  return LocalReturnData;
};

const LocalFuncColumnsNeeded = () => {
  const LocalDataAsArray = StartFuncPullData();

  const LocalToReturnArray = LocalDataAsArray.map(element => {
    return {
      CustomerName: element.CustomerName,
      Mobile: element.Mobile
    }
  });

  return LocalToReturnArray;
};

export { StartFunc };
