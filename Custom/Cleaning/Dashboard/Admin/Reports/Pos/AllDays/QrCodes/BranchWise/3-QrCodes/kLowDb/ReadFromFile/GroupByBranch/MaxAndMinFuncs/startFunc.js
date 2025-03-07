import { StartFunc as StartFuncForQrCodes } from "./forQrCodes.js";
import { StartFunc as forOrderDate } from "./forOrderDate.js";

let StartFunc = ({ inGroupedData }) => {
    const grouped = inGroupedData;

    let LocalReturnArray = [];

    for (const [key, value] of Object.entries(grouped)) {
        const LoopInsideArray = value;

        LocalReturnArray.push({
            BranchName: key,
            QrCount: value.length,
            ...forOrderDate({ inDataAsArray: LoopInsideArray }),
            ...StartFuncForQrCodes({ inDataAsArray: LoopInsideArray })
        });
    };

    return LocalReturnArray;
};

let StartFunc1 = ({ inGroupedData }) => {
    const grouped = inGroupedData;

    let LocalReturnArray = [];

    for (const [key, value] of Object.entries(grouped)) {
        const LoopInsideArray = value;

        const LoopInsideQrCodes = LoopInsideArray.map(element => {
            return element.QrCodeId
        });

        const LoopInsideOrderDateTime = LoopInsideArray.map(element => {
            return element.OrderDateTime
        });

        // console.log("LoopInsideOrderDateTime : ", LoopInsideOrderDateTime);

        LocalReturnArray.push({
            BranchName: key,
            QrCount: value.length,
            QrMax: LoopInsideQrCodes.reduce((a, b) => a > b ? a : b),
            QrMin: LoopInsideQrCodes.reduce((a, b) => a < b ? a : b),
            OrderDateMax: LoopInsideOrderDateTime.reduce((a, b) => a > b ? a : b),
            OrderDateMin: LoopInsideOrderDateTime.reduce((a, b) => a < b ? a : b)
        });
    };

    return LocalReturnArray;
};

export { StartFunc };