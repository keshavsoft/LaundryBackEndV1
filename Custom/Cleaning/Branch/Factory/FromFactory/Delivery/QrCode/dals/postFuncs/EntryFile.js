import { StartFunc as FacoryEntryScan } from '../../kLowDb/WriteToFile/Completion/entryFile.js';

let PostFunc = ({ inFactory, inDataInsert, inQrCodeId }) => {
    let LocalFromLowDb = FacoryEntryScan({ inFactory, inDataInsert, inQrCodeId });

    return LocalFromLowDb;
};

export {
    PostFunc
};