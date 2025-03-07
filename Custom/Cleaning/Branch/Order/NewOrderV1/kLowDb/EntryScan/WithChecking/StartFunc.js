import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";

let StartFunc = ({ inMobile, inBranch }) => {
    let LocalMobile = inMobile;
    let LocalBranch = inBranch;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalStartFuncPullData = StartFuncPullData({ inBranch: LocalBranch });

    if (LocalStartFuncPullData.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };

    const db = LocalStartFuncPullData.inDb;

    let LocalDataWithUuid = LocalFuncGeneratePk({
        inMobileNumber: LocalMobile,
        inData: db.data,
        inBranch: LocalBranch
    });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.InsertData);
    db.write();

    LocalReturnData.KTF = true;
    LocalReturnData.pk = LocalDataWithUuid.InsertData.pk;

    return LocalReturnData;
};

export { StartFunc };