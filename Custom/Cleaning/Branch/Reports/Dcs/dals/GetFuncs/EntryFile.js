import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';
import { StartFunc as toScan } from '../../kLowDb/ReadFromFiles/toScan.js';
import { StartFunc as SentAndFactoryScan } from '../../kLowDb/ReadFromFiles/SentAndFactoryScan.js';

let GetFuncs = ({ inBranch }) => {
    return ReadFromFiles({ inBranch });
};

let GetToScanFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return toScan({ inBranch, inFromDate, inToDate });
};

let GetSentAndFactoryScanFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return SentAndFactoryScan({ inBranch, inFromDate, inToDate });
};

export {
    GetFuncs, GetToScanFuncs, GetSentAndFactoryScanFuncs
};