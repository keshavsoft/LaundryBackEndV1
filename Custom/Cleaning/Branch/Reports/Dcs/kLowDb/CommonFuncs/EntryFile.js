import { StartFunc as EntryCancelDc } from '../CommonFuncs/FromApi/EntryCancelDc.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/FromApi/EntryCancelScan.js';
import { StartFunc as FromFactoryCancelScan } from '../CommonFuncs/FromApi/FromFactoryCancelScan.js';

const StartFunc = ({ inBranch, fromDate, toDate }) => {
    let LocalBranch = inBranch;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");

    const EntryCancelDcData = EntryCancelDc();
    const EntryCancelScanData = EntryCancelScan();
    const FromFactoryCancelScanData = FromFactoryCancelScan();

    const LocalFilterBranchDc = EntryCancelDcData.filter(e =>
        e.Branch === modifiedBranch &&
        new Date(e.DateTime) >= new Date(fromDate) &&
        new Date(e.DateTime) <= new Date(toDate)
    );

    const TransformedData = MergeFunc({
        BranchDc: LocalFilterBranchDc,
        EntryCancelScan: EntryCancelScanData,
        FromFactoryCancelScan: FromFactoryCancelScanData
    });

    let BranchDcdb = TransformedData.filter(ele => ele.Pending !== 0);

    return BranchDcdb.slice().reverse();
};

const MergeFunc = ({ BranchDc, EntryCancelScan, FromFactoryCancelScan }) => {
    return BranchDc.map(dc => {
        const Sent = EntryCancelScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const Scanned = FromFactoryCancelScan.filter(qr => qr.VoucherRef == dc.pk).length;

        return {
            ...dc,
            Sent,
            Scanned,
            Pending: Sent - Scanned,
            TimeSpan: TimeSpan(dc.DateTime)
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
