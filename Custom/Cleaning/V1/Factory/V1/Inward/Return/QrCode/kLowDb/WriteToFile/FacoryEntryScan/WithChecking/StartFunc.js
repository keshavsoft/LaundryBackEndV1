import { StartFunc as StartFuncPullData } from "../../../../../../../../../../../../binV4/EntryCancelScan/Create/kLowDb/CommonFuncs/ReturnDbObjectWithSchema.js";
import { StartFunc as StartFuncUniqueKeyCheck } from "./Checks/UniqueKeyCheck.js";
import { StartFunc as checkReferences } from "./Checks/checkReferences.js";
import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";

let StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalStartFuncPullData = StartFuncPullData();

    const LocalTableSchema = LocalStartFuncPullData.TableSchema;
    const db = LocalStartFuncPullData.dbObject;
    db.read();

    let LocalFromCheckReferences = checkReferences({
        inTableSchema: LocalTableSchema,
        inDataToInsert: LocalinDataToInsert
    });

    if (LocalFromCheckReferences.KTF === false) {
        LocalReturnData.KReason = LocalFromCheckReferences.KReason;
        return LocalReturnData;
    };

    let LocalStartFuncChecksQrCodeId = StartFuncUniqueKeyCheck({ inData: db.data, inDataToInsert: LocalinDataToInsert, inSchema: LocalTableSchema.fileData });

    if (LocalStartFuncChecksQrCodeId.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncChecksQrCodeId.KReason;
        return LocalReturnData;
    };

    let LocalDataWithUuid = LocalFuncGeneratePk({
        inDataToInsert: LocalinDataToInsert,
        inData: db.data,
        inColumns: LocalTableSchema.fileData
    });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.InsertData);
    db.write();
    LocalReturnData.KTF = true;
    LocalReturnData.ScanNo = LocalDataWithUuid.InsertData.QrCodeId;

    return LocalReturnData;
};

export { StartFunc };