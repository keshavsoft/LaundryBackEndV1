import { StartFunc as Orders } from '../../kLowDb/CommonFuncs/Orders.js'

let GetAllFuncs = () => {
    return Orders();
};

export {
    GetAllFuncs
};