import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../../../../../../binV4/Config.json' assert { type: 'json' };
let LocalTableName = "KData/JSONForLogin/318/Login/Users.json";

let StartFunc = () => {
    let LocalDataPk = Configjson.jsonConfig.DataPk;

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
