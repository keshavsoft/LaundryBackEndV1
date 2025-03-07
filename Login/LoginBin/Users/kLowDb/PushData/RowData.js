import Configjson from '../../../../../binV5Secured/Config.json' assert { type: 'json' };
import { StartFunc as StartFuncReturnDbObject } from "../CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inId }) => {
    
    let LocalId = inId;

    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();

    LocalFromLowDb.read();

    if ("error" in LocalFromLowDb.data) {
        LocalReturnData.err = LocalFromLowDb.data.error;
        return LocalReturnData;
    }

    if (LocalFromLowDb.data.length !== 0) {
        var LocalFindData = LocalFromLowDb.data.find(e => e.UuId == LocalId)
        
        if (LocalFindData === undefined) {
            LocalReturnData.KReason = "No Data"
            return LocalReturnData
        };
    };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFindData;

    return LocalReturnData;
};

export { StartFunc };
