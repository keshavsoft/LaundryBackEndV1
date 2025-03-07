import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonAggrFuncs = "AggrFuncs";

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = "AggrFuncs/restClients/GetEndPoints";
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        Home({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });

        DataOnly({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });

    });

};

const Home = ({ inFrom, inTo }) => {
    let LocalFileData = `GET http://localhost:${inFrom}/${CommonAggrFuncs}`;

    fs.writeFileSync(`${inTo}/home.http`, LocalFileData);
};

const DataOnly = ({ inFrom, inTo }) => {
    const LocalEndPoint = "Count";
    let LocalFileData = `GET http://localhost:${inFrom}/${CommonAggrFuncs}/${LocalEndPoint}`;

    fs.writeFileSync(`${inTo}/${LocalEndPoint}.http`, LocalFileData);
};

export { StartFunc };