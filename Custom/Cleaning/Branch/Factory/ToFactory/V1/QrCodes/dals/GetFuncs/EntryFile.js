import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';
import { StartFunc as GetRowCountById } from '../../kLowDb/ReadFileList/GetRowCountById.js';
import { StartFunc as StartFuncFromGetPending } from '../../kLowDb/ReadFromFile/Pending.js';

let GetRowDataFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inBranch, inId });

    return LocalFromLowDb;
};

let GetRowCountFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowCountById({ inBranch, inId });

    return LocalFromLowDb;
};

let GetPendingFunc = async ({ inId, inFactory }) => {
    let LocalFromLowDb = await StartFuncFromGetPending({ inId, inFactory });

    return await LocalFromLowDb;
};

export {
    GetRowDataFunc, GetRowCountFunc,
    GetPendingFunc
};