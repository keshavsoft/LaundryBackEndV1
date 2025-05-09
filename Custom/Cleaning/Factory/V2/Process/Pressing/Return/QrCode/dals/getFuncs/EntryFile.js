// import HomeJson from './home.json' with {type: 'json'};
import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';
import { StartFunc as GetRowQrDataById } from '../../kLowDb/ReadFileList/GetRowQrDataById.js';
import { StartFunc as GetRowCountById } from '../../kLowDb/ReadFileList/GetRowCountById.js';
import { StartFunc as ScanDcDetails } from '../../kLowDb/ReadFileList/ScanDcDetails.js';

let GetRowDataFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inFactory, inId });

    return LocalFromLowDb;
};

let GetRowQrDataFunc = ({ inId }) => {
    let LocalFromLowDb = GetRowQrDataById({ inId });

    return LocalFromLowDb;
};
let GetRowCountFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetRowCountById({ inFactory, inId });

    return LocalFromLowDb;
};

let GetScanDcDetailsFunc = ({ id }) => {
    let LocalFromLowDb = ScanDcDetails({ id });

    return LocalFromLowDb;
};

export {
    GetRowDataFunc, GetRowQrDataFunc, GetRowCountFunc,GetScanDcDetailsFunc
};