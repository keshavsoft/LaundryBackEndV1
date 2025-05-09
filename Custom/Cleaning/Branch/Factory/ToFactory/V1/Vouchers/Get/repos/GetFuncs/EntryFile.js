import {
    GetFuncs as GetFuncsDal,
    GetToScanFuncs as GetToScanFuncsDal,
    GetToScanOnlyFuncs as GetToScanOnlyFuncsDal,
    GetSentFuncs as GetSentFuncsDal,
    GetSentAndFactoryScanFuncs as GetSentAndFactoryScanFuncsDal,
    GetRowDataFuncs as GetRowDataFuncsDal,
    GetToPrintOnlyFuncs as GetToPrintOnlyFuncsDal,
    GetScanOnlyFuncs as GetScanOnlyFuncsDal,
    GetDeleteVocherFuncs as GetDeleteVocherFuncsDal,
    GetQrDataWithPrintFunc as GetQrDataWithPrintFuncDal,
    GetShowAllFunc as GetShowAllFuncDal,
    GetEntryScannedRowDataFunc as GetEntryScannedRowDataFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetToScanFuncs = ({ inBranch }) => {
    return GetToScanFuncsDal({ inBranch });
};

let GetToScanOnlyFuncs = ({ inBranch }) => {
    return GetToScanOnlyFuncsDal({ inBranch });
};

let GetSentFuncs = ({ inBranch }) => {
    return GetSentFuncsDal({ inBranch });
};

let GetSentAndFactoryScanFuncs = ({ inBranch }) => {
    return GetSentAndFactoryScanFuncsDal({ inBranch });
};

let GetRowDataFuncs = ({ inId }) => {
    return GetRowDataFuncsDal({ inId });
};

let GetToPrintOnlyFuncs = ({ inBranch }) => {
    return GetToPrintOnlyFuncsDal({ inBranch });
};

let GetScanOnlyFuncs = ({ inBranch }) => {
    return GetScanOnlyFuncsDal({ inBranch });
};

let GetDeleteVocherFuncs = ({ inBranch }) => {
    return GetDeleteVocherFuncsDal({ inBranch });
};

let GetQrDataWithPrintFunc = async ({ inDC }) => {
    let LocalFromDal = await GetQrDataWithPrintFuncDal({ inDC });

    return LocalFromDal;
};
let GetShowAllFunc = async ({ inBranch,inFromDate, inToDate }) => {
    let LocalFromDal = await GetShowAllFuncDal({ inBranch,inFromDate, inToDate });

    return LocalFromDal;
};

let GetEntryScannedRowDataFunc = async ({ id }) => {
    let LocalFromDal = await GetEntryScannedRowDataFuncDal({ id });

    return LocalFromDal;
};

export {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs, GetSentFuncs,
    GetSentAndFactoryScanFuncs, GetRowDataFuncs, GetToPrintOnlyFuncs, GetScanOnlyFuncs, GetDeleteVocherFuncs,
    GetQrDataWithPrintFunc,
    GetShowAllFunc,
    GetEntryScannedRowDataFunc
};