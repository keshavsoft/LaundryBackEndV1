import fs from "fs";

let StartFunc = ({ inFilePath }) => {
    let LocalFilePath = inFilePath;
    const data = fs.readFileSync(LocalFilePath, { encoding: 'utf8' });
    let JsonParseData = JSON.parse(data);

    return JsonParseData;
};

export { StartFunc };
