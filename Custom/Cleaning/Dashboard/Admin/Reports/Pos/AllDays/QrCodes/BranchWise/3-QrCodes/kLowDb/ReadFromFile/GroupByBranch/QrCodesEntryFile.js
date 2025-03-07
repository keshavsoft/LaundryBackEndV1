import { StartFunc as StartFuncArrayToObject } from "./QrarrayToObject.js";
import { StartFunc as StartFuncInsertMaxAndMins } from "./MaxAndMinFuncs/QrStartFunc.js";

let StartFunc = ({ inDataAsArray }) => {
    const grouped = StartFuncArrayToObject({ inDataAsArray });

    let LocalWithMaxAndMins = StartFuncInsertMaxAndMins({ inGroupedData: grouped });

    return LocalWithMaxAndMins;
};

export { StartFunc };