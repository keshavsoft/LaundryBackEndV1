import fs from "fs";
import ConfigJson from '../../binV4/Config.json' assert {type: 'json'};
import { StartFunc as StartFuncLoopFiles } from "./loopFiles.js";

let StartFunc = () => {
    let LocalFromAllFiles = LocalFuncReturnAllFiles();

    return StartFuncLoopFiles({ inFilesAsArray: LocalFromAllFiles });
};

let LocalFuncReturnAllFiles = () => {
    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;

    let files = fs.readdirSync(LocalDataPath)
        .filter(filename => filename.endsWith('.json'));

    return files;
};

export { StartFunc };
