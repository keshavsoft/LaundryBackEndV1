import { StartFunc as All } from '../../kLowDb/ReadFileList/All.js';
import { StartFunc as Pending } from '../../kLowDb/ReadFileList/Pending.js';
import { StartFunc as Scanned } from '../../kLowDb/ReadFileList/Scanned.js';
import { StartFunc as Returns } from '../../kLowDb/ReadFileList/EntryRetuns.js';
import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';
import { StartFunc as GetRowQrDataById } from '../../kLowDb/ReadFileList/GetRowQrDataById.js';
import { StartFunc as GetRowCountById } from '../../kLowDb/ReadFileList/GetRowCountById.js';
import { StartFunc as FilterAll } from '../../kLowDb/ReadFileList/FilterAll.js';
import { StartFunc as ScannedFilterAll } from '../../kLowDb/ReadFileList/ScannedFilterAll.js';
import { StartFunc as DcDetails } from '../../kLowDb/ReadFileList/DcDetails.js';

// import HomeJson from './home.json' with {type: 'json'};

let GetFunc = ({ inFactory }) => {
    let LocalFromLowDb = All({ inFactory });

    return LocalFromLowDb;
};

let GetPendingFunc = ({ inFactory }) => {
    let LocalFromLowDb = Pending({ inFactory });

    return LocalFromLowDb;
};

let GetScannedFunc = ({ inFactory }) => {
    let LocalFromLowDb = Scanned({ inFactory });

    return LocalFromLowDb;
};

let GetReturnsFunc = ({ inFactory }) => {
    let LocalFromLowDb = Returns({ inFactory });

    return LocalFromLowDb;
};

let GetRowDataFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inFactory, inId });

    return LocalFromLowDb;
};

let GetRowQrDataFunc = ({ inId }) => {
    let LocalFromLowDb = GetRowQrDataById({ inId });

    return LocalFromLowDb;
};

let GetRowCountFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowCountById({ inFactory: inBranch, inId });

    return LocalFromLowDb;
};

let GetFilterFunc = ({ inFactory, fromDate, toDate }) => {
    let LocalFromLowDb = FilterAll({ inFactory, fromDate, toDate });

    return LocalFromLowDb;
};

let GetScannedFilterFunc = ({ inFactory, fromDate, toDate }) => {
    let LocalFromLowDb = ScannedFilterAll({ inFactory, fromDate, toDate });

    return LocalFromLowDb;
};

let GetDcDetailsFunc = ({ id }) => {
    let LocalFromLowDb = DcDetails({ id });

    return LocalFromLowDb;
};
export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc,
     GetRowQrDataFunc, GetRowCountFunc, GetFilterFunc, GetScannedFilterFunc,GetDcDetailsFunc
};