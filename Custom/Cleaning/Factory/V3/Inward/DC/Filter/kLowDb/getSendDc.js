import { StartFunc as StartFuncPullData } from "../../../../../../../../binV4/BranToFactDC/CommonPull/kLowDb/PullData/returnAsArray.js";


let StartFunc = () => {
  let LocalReturnData = { KTF: false };

  LocalReturnData.KTF = true;
  const LocalDataAsArray = StartFuncPullData();

  LocalReturnData.JsonData = LocalFilterFunc({ inDataAsArray: LocalDataAsArray });

  return LocalReturnData;
};

const LocalFilterFunc = ({ inDataAsArray }) => {
  const LocalDataAsArray = inDataAsArray;

  const LocalAfterFiler = LocalDataAsArray.filter(element => {
    return "SendDc" in element === false || element?.SendDc === false;
  });

  return LocalAfterFiler;
};

export { StartFunc };
