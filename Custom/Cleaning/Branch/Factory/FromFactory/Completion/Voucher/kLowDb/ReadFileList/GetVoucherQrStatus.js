import { StartFunc as FactoryOut_DC } from '../CommonFuncs/FromApi/FactoryOut_DC.js';
import { StartFunc as FactoryOut_QrCodeScan } from '../CommonFuncs/FromApi/FactoryOut_QrCodeScan.js';
import { StartFunc as FromFactoryCancelScan } from '../CommonFuncs/FromApi/FromFactoryCancelScan.js';
const CommonReplaceText = "BranOrders";

const StartFunc = ({ inBranch }) => {
    let LocalBranch = inBranch.replace(CommonReplaceText, "");
    
    const EntryCancelDcData = FactoryOut_DC();
    const EntryCancelScanData = FactoryOut_QrCodeScan();
    const FromFactoryCancelScanData = FromFactoryCancelScan();

    const LocalFilterBranchDc = EntryCancelDcData.filter(e => e.BranchName === LocalBranch);

    const TransformedData = MergeFunc({
        BranchDc: LocalFilterBranchDc,
        EntryCancelScan: EntryCancelScanData,
        FromFactoryCancelScan: FromFactoryCancelScanData,
        inBranch: LocalBranch
    });
    
    let BranchDcdb = TransformedData.filter(ele => ele.Pending !== 0)

    return BranchDcdb.slice().reverse();
};

const MergeFunc = ({ BranchDc, EntryCancelScan, FromFactoryCancelScan, inBranch }) => {
    return BranchDc.map(dc => {
        const Sent = EntryCancelScan.filter(qr => qr.VoucherRef == dc.pk && qr.BranchName === inBranch).length;
        const Scanned = FromFactoryCancelScan.filter(qr => qr.VoucherRef == dc.pk).length;

        return {
            ...dc,
            Sent,
            Scanned,
            Pending: Sent - Scanned,
            TimeSpan: TimeSpan(dc.DateTime),
            DateTime: new Date(dc.DateTime).toLocaleDateString('en-GB')// hh:mm:ss format
        };
    });
};

const TimeSpan = DateTime => {
    const diffMs = new Date() - new Date(DateTime);
    const diffMonths = Math.floor(diffMs / 2629800000);
    const diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    const diffMins = Math.round((diffMs % 3600000) / 60000);

    return diffMonths > 0
        ? `${diffMonths} months, ${diffDays} days, ${diffHrs} hrs, ${diffMins} min`
        : diffDays > 0
            ? `${diffDays} days, ${diffHrs} hrs, ${diffMins} min`
            : diffHrs > 0
                ? `${diffHrs} hrs, ${diffMins} min`
                : `${diffMins} min`;
};

export { StartFunc };
