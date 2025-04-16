import { StartFunc as QrAllReports } from '../../kLowDb/ReadFileList/QrAllReports.js';
import { StartFunc as Pending } from '../../kLowDb/ReadFromFile/Pending.js';
import { StartFunc as Scanned } from '../../kLowDb/ReadFromFile/Scanned.js';

let GetAllFuncs = ({ inBranch ,inFromDate, inToDate}) => {
    return QrAllReports({ inBranch,inFromDate, inToDate });
};

let GetPendingFuncs = ({ inBranch ,inFromDate, inToDate }) => {
    return Pending({ inBranch, inFromDate, inToDate });
};

let GetScannedFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return Scanned({ inBranch, inFromDate, inToDate });
};


export {
    GetAllFuncs, GetPendingFuncs, GetScannedFuncs
};