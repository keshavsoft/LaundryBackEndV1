import { StartFunc as BranchDc } from "../CommonFuncs/FromApi/BranToFactDC.js";
import { StartFunc as BranchScan } from "../CommonFuncs/FromApi/BranToFactBScan.js";
import { StartFunc as QrCodes } from "../CommonFuncs/FromApi/QrCodes.js";

let StartFunc = ({ inDC }) => {
    let LocalDC = parseInt(inDC);
    let BranchDcdb = BranchDc();
    let LocalBranchScan = BranchScan();
    let LocalQrCodes = QrCodes();
    let LocalFilterBranchDc = BranchDcdb.find((e) => e.pk === LocalDC);

    if (LocalFilterBranchDc === undefined) {
        return "No Data";
    }
    let LocalFilterBranchScan = LocalBranchScan.filter(
        (e) => e.VoucherRef == LocalFilterBranchDc.pk
    );
    let LocalMergeData = MergeFunc({
        inScan: LocalFilterBranchScan,
        inQr: LocalQrCodes,
    });
    return {
        ...LocalFilterBranchDc,
        Date: new Date(LocalFilterBranchDc.DateTime).toLocaleDateString("en-GB"),
        OrderData: Object.values(LocalMergeData)
    };
};

let MergeFunc = ({ inScan, inQr }) => {
    let data = inScan.map((element) => {
        let LocalFind = inQr.find((ele) => ele.pk == element.QrCodeId);
        return {
            ...element,
            OrderNumber: LocalFind?.OrderNumber,
            OrderData: new Date(LocalFind?.BookingData.OrderData.Currentdateandtime).toLocaleDateString("en-GB"),
            DeliveryDate: new Date(LocalFind?.DeliveryDateTime).toLocaleDateString("en-GB")
        };
    });
    return data.reduce((acc, obj) => {
        acc[obj.OrderNumber] = acc[obj.OrderNumber] || { OrderNumber: obj.OrderNumber, QrCount: 0, OrderDate: obj.OrderData, DeliveryDate: obj.DeliveryDate };
        acc[obj.OrderNumber].QrCount += 1;
        return acc;
    }, {});
};

export { StartFunc };
