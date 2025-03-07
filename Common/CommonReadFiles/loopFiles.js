import path from "path";
import ConfigJson from '../../binV4/Config.json' assert {type: 'json'};
import { StartFunc as StartFuncReadFileData } from "./readFileData.js";

let StartFunc = ({ inFilesAsArray }) => {
    let LocalReturnData = { KTF: false }

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;

    let LocalFromAllFiles = inFilesAsArray;

    const files = LocalFromAllFiles.map(filename => {
        let LoopInsideObject = {};
        LoopInsideObject.FileName = path.parse(filename).name;
        LoopInsideObject.FileData = StartFuncReadFileData({ inFilePath: `${LocalDataPath}/${filename}` });
        return LoopInsideObject;
    });

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = files;

    return LocalReturnData;
};

export { StartFunc };
