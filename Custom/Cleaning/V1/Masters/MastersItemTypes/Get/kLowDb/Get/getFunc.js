import { StartFunc as StartFuncPullData } from '../CommonFuncs/MastersItemTypes.js';

let StartFunc = () => {
  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalStartFuncPullData;

  return LocalReturnData;
};

export { StartFunc };
