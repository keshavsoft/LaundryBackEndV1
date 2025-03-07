import { StartFunc as StartFuncPullData } from '../../kLowDb/GetData.js';
import { StartFunc as StartFuncUpdateData } from '../../kLowDb/UpdateData/Email.js';
import { StartFunc as StartFuncDataBase } from "../../../../../SetupFuncs/ForDatabase/EntryFile.js";
import { StartFunc as StartFuncUpdateDataPk } from "../../kLowDb/UpdateData/DataPK.js";
import { StartFunc as PushData } from '../../kLowDb/PushData/UserNameOnly.js';
import { StartFunc as RowData } from '../../kLowDb/PushData/RowData.js';


let GetFunc = () => {
    return StartFuncPullData();
};

let ValidateEmailFunc = ({ inUuid }) => {
    let LocalUuId = inUuid
    let LocalFromLowDb = StartFuncUpdateData({ inUuid });
    let LocalDataPk;

    if (LocalFromLowDb.KTF) {
        LocalDataPk = StartFuncDataBase();
        let LocalFromLowDbDataPk = StartFuncUpdateDataPk({ inDataPk: LocalDataPk, inUuid: LocalUuId });
        return LocalFromLowDbDataPk;
    }
    return LocalFromLowDb;
};

let GetCreateWithUserFunc = ({ inUserName }) => {
    return PushData({ inUsername: inUserName });
};

let GetRowDataFunc = ({ inId }) => {
    return RowData({ inId: inId });
};

export { GetFunc, ValidateEmailFunc, GetCreateWithUserFunc,GetRowDataFunc };