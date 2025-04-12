import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
let LocalTableName = "KData/JSONForLogin/318/Login/Users.json";

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalTableName}`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();
    db.data.error = "From KLowDb";
    return db.data;
};

export { StartFunc };
