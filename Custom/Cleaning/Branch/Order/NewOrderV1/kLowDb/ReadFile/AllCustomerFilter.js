import { StartFunc as StartFuncPullData } from "./CommonFuncs/Orders.js";

let StartFunc = ({ inBranch, inMobile }) => {
  let LocalReturnData = { KTF: false };
  let LoclainBranch = inBranch;
  let LocalMobile = inMobile;
  let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
  let LocalStartFuncPullData = StartFuncPullData({
    inBranch: LoclainBranch,
    inMobile: LocalMobile,
  });

  if (LocalStartFuncPullData.KTF === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  }
  const db = LocalStartFuncPullData.JsonData;

  let LocalRowFind = db.filter(e => true);

  if (LocalRowFind === undefined) {
    LocalReturnData.KReason = "No Data";
    return LocalReturnData;
  }

  LocalReturnData.JsonData = LocalRowFind;
  LocalReturnData.KTF = true;

  return LocalReturnData;
};

export { StartFunc };
