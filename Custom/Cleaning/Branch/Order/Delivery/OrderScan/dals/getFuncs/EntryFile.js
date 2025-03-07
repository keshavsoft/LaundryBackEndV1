import { StartFunc as GetOrderWithQr } from '../../kLowDb/ReadFileList/GetOrderWithQr.js';
import { StartFunc as GetOrderSettlementWithQr } from '../../kLowDb/ReadFileList/GetOrderSettlementWithQr.js';
import { StartFunc as GetCheckOrder } from '../../kLowDb/ReadFileList/GetCheckOrder.js';
import { StartFunc as GetCheckStatusOrder } from '../../kLowDb/ReadFileList/GetCheckOrderStatus.js';

let GetFunc = ({ inOrderId, inBranch }) => {
    return GetOrderWithQr({ inOrderId, inBranch });
};

let GetOrderWithQrFunc = ({ inOrderId, inBranch  }) => {
    return GetOrderSettlementWithQr({ inOrderId, inBranch  });
};

let GetCheckFunc = ({ inOrderId, inBranch }) => {
    return GetCheckOrder({ inOrderId, inBranch });
};

let GetCheckStatusFunc = ({ inOrderId, inBranch }) => {
    return GetCheckStatusOrder({ inOrderId, inBranch });
};

let GetRowDataFunc = ({ inId }) => {
    return GetOrderWithQr({ inId });
};
export {
    GetFunc, GetOrderWithQrFunc, GetRowDataFunc,GetCheckFunc,GetCheckStatusFunc
};