import { StartFunc as Orders } from '../../kLowDb/CommonFuncs/BranchArray.js'

let GetAllFuncs = () => {
    return Orders();
};

export {
    GetAllFuncs
};