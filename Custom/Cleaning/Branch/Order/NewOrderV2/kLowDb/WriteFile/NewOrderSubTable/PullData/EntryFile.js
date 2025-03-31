import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../../../CommonFuncs/CustomTableDbObjectWithSchema.js';

let StartFunc = (inTable) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const dbFromDbObjectWithSchema = StartFuncReturnDbObjectWithSchema(inTable);

    const db = dbFromDbObjectWithSchema.dbObject;

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.inDb = db
    LocalReturnData.inTableSchema = dbFromDbObjectWithSchema.TableSchema

    return LocalReturnData;
};

export { StartFunc };