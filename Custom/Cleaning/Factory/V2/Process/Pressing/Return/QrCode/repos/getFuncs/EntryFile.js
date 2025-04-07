import {
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
    GetRowCountFunc as GetRowCountFuncDal,
    GetScanDcDetailsFunc as GetScanDcDetailsFuncDal
    
} from '../../dals/getFuncs/EntryFile.js';


let GetRowDataFunc = ({ inFactory, inId }) => {
    return GetRowDataFuncDal({ inFactory, inId });
};

let GetRowQrDataFunc = ({ inId }) => {
    return GetRowQrDataFuncDal({ inId });
};

let GetRowCountFunc = ({ inFactory, inId }) => {
    return GetRowCountFuncDal({ inFactory, inId });
};

let GetScanDcDetailsFunc = ({ id }) => {
    return GetScanDcDetailsFuncDal({ id });
};

export {
    GetRowDataFunc, GetRowQrDataFunc, GetRowCountFunc, GetScanDcDetailsFunc
};