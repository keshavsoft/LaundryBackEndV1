import { StartFunc as StartFuncPullData } from '../CommonFuncs/MastersItemServiceDataOnly.js';

let StartFunc = ({ inId }) => {
  let LocalId = parseInt(inId);

  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  let LocalFindData = LocalStartFuncPullData.find(el => el.pk === LocalId);

  if (LocalFindData === undefined) {
    LocalReturnData.KReason = `No Data by : ${LocalId}`;
    return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFindData;

  return LocalReturnData;
};

export { StartFunc };
