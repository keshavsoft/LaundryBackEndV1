import { StartFunc as StartFuncPullData } from '../CommonFuncs/MastersItemServiceDataOnly.js';

let StartFunc = () => {
  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalStartFuncPullData;

  return LocalReturnData;
};

export { StartFunc };
// let localdata = StartFunc(); console.log("localdata", localdata);
