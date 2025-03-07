import { StartFunc as StartFuncCommonReadFiles } from "../../../../CommonReadFiles/readAllFiles.js";

let StartFunc = () => {
    const LocalArrayOfFiles = StartFuncCommonReadFiles();

    const LocalFilteredArray = LocalArrayOfFiles.JsonData.filter(element => {
        return element.FileData.length > 0;
    });

    return LocalFilteredArray;
};

export { StartFunc };
