import path from "path";
import dotenv from 'dotenv';

dotenv.config();
const CommonSubTable = "SubTable/Delete";

import { StartFunc as home } from "./EndPointsContent/home.js";
import { StartFunc as StartFuncSubKey } from "./EndPointsContent/SubKey.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    let LocalTypeName = `${CommonSubTable}/restClients/DeleteEndPoints`;
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        home({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inSubTablePath: CommonSubTable
        });

        StartFuncSubKey({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inSubTablePath: CommonSubTable
        });
    });
};

export { StartFunc };