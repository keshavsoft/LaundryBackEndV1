import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';
import { StartFunc as toScan } from '../../kLowDb/ReadFromFiles/toScan.js';
import { StartFunc as SentAndFactoryScan } from '../../kLowDb/ReadFromFiles/SentAndFactoryScan.js';
import { StartFunc as EntryReturn } from '../../kLowDb/ReadFromFiles/EntryReturn.js';

let GetFuncs = ({ inBranch }) => {
    return ReadFromFiles({ inBranch });
};

let GetToScanFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return toScan({ inBranch, inFromDate, inToDate });
};

let GetSentAndFactoryScanFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return SentAndFactoryScan({ inBranch, inFromDate, inToDate });
};

let GetEntryReturnFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return EntryReturn({ inBranch, inFromDate, inToDate });
};

let GetProcessReturnFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return SentAndFactoryScan({ inBranch, inFromDate, inToDate });
};

let GetCompletionReturnFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return SentAndFactoryScan({ inBranch, inFromDate, inToDate });
};

export {
    GetFuncs, GetToScanFuncs, GetSentAndFactoryScanFuncs, GetEntryReturnFuncs, GetProcessReturnFuncs, GetCompletionReturnFuncs
};