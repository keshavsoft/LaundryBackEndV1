import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFileList/ToadyQrAllReports.js';
import { StartFunc as InBranch } from '../../kLowDb/ReadFromFile/InBranch.js';
import { StartFunc as toFactory } from '../../kLowDb/ReadFromFile/toFactory.js';

let GetAllFuncs = ({ inBranch ,inFromDate, inToDate}) => {
    return ToadyQrAllReports({ inBranch,inFromDate, inToDate });
};

let GetInBranchFuncs = ({ inBranch ,inFromDate, inToDate }) => {
    return InBranch({ inBranch, inFromDate, inToDate });
};

let GetToFactoryFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return toFactory({ inBranch, inFromDate, inToDate });
};


export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
};