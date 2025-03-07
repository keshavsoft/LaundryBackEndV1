import { StartFunc as StartFuncPullData } from "../../CommonFuncs/CutomTable.js";

let StartFunc = ({ inBranch, inMobile }) => {
    let LocalReturnData = { KTF: false };
    let LoclainBranch = inBranch;
    let LocalMobile = inMobile;
    let LocalStartFuncPullData = StartFuncPullData({ inTable: LoclainBranch });

    if (LocalStartFuncPullData.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };
    const db = LocalStartFuncPullData.JsonData;

    let LocalRowFind = db.filter(element => element.CustomerData.Mobile === LocalMobile);

    if (LocalRowFind.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    LocalReturnData.JsonData = LocalRowFind;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };