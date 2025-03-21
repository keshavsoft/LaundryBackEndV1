import { StartFunc as StartFuncreadBranchFile } from "../../CommonFuncs/readBranchFile.js";
// import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";

let StartFunc = ({ inPostBody, inId, inBranch }) => {
    let LocalBranch = inBranch;
    let LocalId = inId;
    let postBody = inPostBody;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalStartwriteFiile = StartFuncreadBranchFile({ inTable: LocalBranch });
    LocalStartwriteFiile.read();

    let LocalFindData = LocalStartwriteFiile.data.find(e => e.pk == LocalId);

    if (LocalFindData === undefined) {
        LocalReturnData.KReason = "No Data";
        return LocalReturnData;
    }

    if (Object.values(LocalFindData.CheckOutData).length > 0) {
        LocalReturnData.KReason = "Already Settled";
        return LocalReturnData;
    }

    let kk = "1";
    LocalFindData.CheckOutData[kk] = { ...postBody }
    LocalStartwriteFiile.write();

    LocalReturnData.KTF = true;
    LocalReturnData.pk = LocalId;

    return LocalReturnData;
};

export { StartFunc };