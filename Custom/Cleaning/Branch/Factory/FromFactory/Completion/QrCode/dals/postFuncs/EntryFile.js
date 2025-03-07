import { StartFunc as FacoryEntryScan } from '../../kLowDb/WriteToFile/Completion/entryFile.js';

let PostFunc = ({ inBranch, inDataInsert, inQrCodeId, inVoucher }) => {
    let LocalFromLowDb = FacoryEntryScan({ inBranch, inDataInsert, inQrCodeId, inVoucher });

    return LocalFromLowDb;
};

export {
    PostFunc
};