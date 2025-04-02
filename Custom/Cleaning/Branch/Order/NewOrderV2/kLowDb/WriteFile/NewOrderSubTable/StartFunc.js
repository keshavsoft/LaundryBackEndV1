import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";

let StartFunc = ({ inTable, inPostBody, id, inKey }) => {
    
    let LocalinDataToInsert = inPostBody;
    let localid = parseInt(id);
    let LocalinKey = inKey;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalStartFuncPullData = StartFuncPullData(inTable);

    if (LocalStartFuncPullData === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };

    const db = LocalStartFuncPullData.inDb;

    let LocalFindRow = db.data.find(element => element.pk === localid);

    let LocalItemsData = LocalFindRow[LocalinKey]

    LocalFuncInsert({ inDataToInsert: LocalinDataToInsert, inItemsData: LocalItemsData });
    db.write();

    LocalReturnData.KTF = true;
    LocalReturnData.pk = LocalItemsData.pk;
    return LocalReturnData;
};

const LocalFuncInsert = ({ inDataToInsert, inItemsData }) => {
    let LocalInData = inItemsData;

    let numberArray = Object.keys(LocalInData).map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);
    LocalInData[MaxPk] = inDataToInsert;
};

export { StartFunc };