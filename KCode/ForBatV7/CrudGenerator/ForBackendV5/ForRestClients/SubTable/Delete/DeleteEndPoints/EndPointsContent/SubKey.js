import fs from "fs";
const CommonEndKey = "SubKey";

const StartFunc = ({ inFrom, inTo, inSubTablePath }) => {
    let LocalFileData = `DELETE http://localhost:${inFrom}/${inSubTablePath}/${CommonEndKey}\r\n`;

    fs.writeFileSync(`${inTo}/${CommonEndKey}.http`, `${LocalFileData}`);
};

export { StartFunc };