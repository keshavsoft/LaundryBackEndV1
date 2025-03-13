import { StartFunc as Generate } from '../../kLowDb/Generate/QrCode.js';

let GetIdFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = Generate({ inBranch, inId });

    return LocalFromLowDb;
};

export { GetIdFunc };