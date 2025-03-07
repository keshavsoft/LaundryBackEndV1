import { StartFunc as StartFuncArrayToObject } from "./arrayToObject.js";
import { StartFunc as StartFuncInsertMaxAndMins } from "./MaxAndMinFuncs/startFunc.js";
import { StartFunc as StartFuncSortBy } from "./sortBy.js";

let StartFunc = ({ inDataAsArray }) => {
    const grouped = StartFuncArrayToObject({ inDataAsArray });

    let LocalWithMaxAndMins = StartFuncInsertMaxAndMins({ inGroupedData: grouped });

    let LocalSorted = StartFuncSortBy({ inDataAsArray: LocalWithMaxAndMins });

    return LocalSorted;
};

export { StartFunc };