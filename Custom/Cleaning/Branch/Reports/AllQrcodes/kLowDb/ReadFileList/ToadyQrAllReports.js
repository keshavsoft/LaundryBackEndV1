import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranToFactBScan.js';

const StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    const modifiedBranch = inBranch.replace("BranOrders", "");
    const Qrdata = QrCodes({ inBranch: modifiedBranch });
    const BranchScandata = BranchScan({ inBranch: modifiedBranch });
    const jVarLocalTransformedData = jFLocalMergeFunc({ inQrData: Qrdata, inScandata: BranchScandata });

    return jFLocalBranchWideData({ inData: jVarLocalTransformedData, inFromDate, inToDate });
};

const jFLocalBranchWideData = ({ inData, inFromDate, inToDate }) =>
    inData
        .filter(e => {
            const itemDate = e.OrderDateTime.split('/').join('-');
            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .reverse();

const jFLocalMergeFunc = ({ inQrData, inScandata }) =>
    inQrData.map(loopQr => ({
        QrCodeId: loopQr.pk,
        ItemName: loopQr.ItemName,
        Rate: loopQr.Rate,
        FactorySelected: loopQr.FactorySelected,
        OrderNo: loopQr.GenerateReference.ReferncePk,
        DeliveryDateTime: new Date(loopQr.DeliveryDateTime).toLocaleDateString('en-GB'),
        location: loopQr.location,
        OrderDateTime: new Date(loopQr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
        Status: inScandata.some(loopScan => loopScan.QrCodeId == loopQr.pk),
        TimeSpan: TimeSpan({ DateTime: loopQr.DateTime })
    }));

const TimeSpan = ({ DateTime }) => {
    const diffMs = new Date() - new Date(DateTime);
    const diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    const diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    const diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) return `${diffMonths} months, ${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    if (diffDays > 0) return `${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    if (diffHrs > 0) return `${diffHrs} hours, ${diffMins} min`;
    return `${diffMins} min`;
};

export { StartFunc };
