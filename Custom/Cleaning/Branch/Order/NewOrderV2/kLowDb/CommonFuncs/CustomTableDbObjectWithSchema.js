import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../../../../binV4/Config.json' assert { type: 'json' };

let StartFunc = (intable) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${intable}.json`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

    return {
        dbObject: db,
        TableSchema: LocalFuncForTableSchema(intable)
    };
};

let LocalFuncForTableSchema = (intable) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    let LocalSecondNeeded = Configjson.jsonConfig.tableAndColumns.children.find(element => {
        return "children" in element === false && element.name === `${intable}.json`;
    });

    return LocalSecondNeeded;
};

export { StartFunc };
