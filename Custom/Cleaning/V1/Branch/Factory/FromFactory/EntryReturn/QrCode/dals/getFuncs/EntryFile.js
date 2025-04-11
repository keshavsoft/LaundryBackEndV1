// import HomeJson from './home.json' with {type: 'json'};
import { StartFunc as AllWithFilter } from '../../kLowDb/ReadFileList/All.js';
import { StartFunc as Pending } from '../../kLowDb/ReadFileList/Pending.js';
import { StartFunc as Scanned } from '../../kLowDb/ReadFileList/Scanned.js';
import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';
import { StartFunc as GetRowQrDataById } from '../../kLowDb/ReadFileList/GetRowQrDataById.js';
import { StartFunc as GetFromFactoryDcWiseItemsById } from '../../kLowDb/ReadFileList/GetFromFactoryDcWiseItemsById.js';
import { StartFunc as GetToScanPendingById } from '../../kLowDb/ReadFileList/GetToScanPendingById.js';
import { StartFunc as All } from '../../kLowDb/ReadFileList/AllWithoutFilter.js';
import { StartFunc as ScannedWithoutFilter } from '../../kLowDb/ReadFileList/ScannedWithoutFilter.js';

let GetFunc = ({ inBranch, fromDate, toDate }) => {
    let LocalFromLowDb = AllWithFilter({ inBranch, fromDate, toDate });

    return LocalFromLowDb;
};

let GetPendingFunc = ({ inBranch }) => {
    let LocalFromLowDb = Pending({ inBranch });

    return LocalFromLowDb;
};

let GetScannedFunc = ({ inBranch, fromDate, toDate }) => {
    let LocalFromLowDb = Scanned({ inBranch, fromDate, toDate });

    return LocalFromLowDb;
};

let GetRowDataFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inBranch, inId });

    return LocalFromLowDb;
};

let GetRowQrDataFunc = ({ inId }) => {
    let LocalFromLowDb = GetRowQrDataById({ inId });

    return LocalFromLowDb;
};

let GetFromFactoryDcWiseItems = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetFromFactoryDcWiseItemsById({ inBranch, inId });

    return LocalFromLowDb;
};

let GetToScanPendingFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetToScanPendingById({ inBranch, inId });

    return LocalFromLowDb;
};

let GetAllFunc = ({ inBranch }) => {
    let LocalFromLowDb = All({ inBranch });

    return LocalFromLowDb;
};

let GetScannedWithOutFilterFunc = ({ inBranch }) => {
    let LocalFromLowDb = ScannedWithoutFilter({ inBranch });

    return LocalFromLowDb;
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetRowQrDataFunc,
    GetFromFactoryDcWiseItems, GetToScanPendingFunc, GetAllFunc,GetScannedWithOutFilterFunc
};