import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../../../../../../binV4/Config.json' assert { type: 'json' };

let StartFunc = ({ inBranchName }) => {
    let LocalDataPk = Configjson.jsonConfig.DataPk;
    let LocalFileName = inBranchName;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${LocalDataPk}/${LocalFileName}.json`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();

    return db.data;
};

export { StartFunc };
