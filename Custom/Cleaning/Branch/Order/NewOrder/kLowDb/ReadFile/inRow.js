import { StartFunc as StartFuncPullData } from "../CommonFuncs/CutomTable.js";

let StartFunc = ({ inBranch, inRow }) => {
    let LocalReturnData = { KTF: false };
    let LoclainBranch = inBranch;
    let LocalRow = parseInt(inRow);
    let LocalStartFuncPullData = StartFuncPullData({ inTable: LoclainBranch });

    if (LocalStartFuncPullData.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };
    const db = LocalStartFuncPullData.JsonData;

    let LocalRowFind = db.find(element => element.pk === LocalRow);

    if (LocalRowFind === undefined) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    LocalReturnData.JsonData = LocalRowFind;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };