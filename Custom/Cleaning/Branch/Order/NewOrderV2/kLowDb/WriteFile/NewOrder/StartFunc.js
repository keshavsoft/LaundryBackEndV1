import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";

const StartFunc = ({ inMobile, inBranch, inUserName }) => {
    let LocalReturnData = { KTF: false };

    let LocalStartFuncPullData = StartFuncPullData({ inBranch });

    if (!LocalStartFuncPullData.KTF) return { ...LocalReturnData, KReason: LocalStartFuncPullData.KReason };

    const { inDb: db } = LocalStartFuncPullData;

    let LocalDataWithUuid = LocalFuncGeneratePk({
        inMobileNumber: inMobile,
        inData: db.data,
        inBranch,
        inUserName
    });

    if (!LocalDataWithUuid.KTF) return { ...LocalReturnData, KReason: LocalDataWithUuid.KReason };

    db.data.push(LocalDataWithUuid.InsertData);
    db.write();

    return { KTF: true, pk: LocalDataWithUuid.InsertData.pk };
};

export { StartFunc };
