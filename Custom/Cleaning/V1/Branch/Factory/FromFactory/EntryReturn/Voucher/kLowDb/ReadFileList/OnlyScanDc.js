import { StartFunc as EntryCancelDc } from '../CommonFuncs/FromApi/EntryCancelDc.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/FromApi/EntryCancelScan.js';
import { StartFunc as FromFactoryCancelScan } from '../CommonFuncs/FromApi/FromFactoryCancelScan.js';
import { StartFunc as BranToFactDC } from '../CommonFuncs/FromApi/BranToFactDC.js';

const StartFunc = ({ inBranch, fromDate, toDate }) => {
    let LocalBranch = inBranch;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");

    const EntryCancelDcData = EntryCancelDc();
    const EntryCancelScanData = EntryCancelScan();
    const FromFactoryCancelScanData = FromFactoryCancelScan();
    const BranchDcData = BranToFactDC();
    const LocalFilterBranchDc = EntryCancelDcData.filter(e => e.Branch === modifiedBranch);

    const TransformedData = MergeFunc({
        BranchDc: LocalFilterBranchDc,
        EntryCancelScan: EntryCancelScanData,
        FromFactoryCancelScan: FromFactoryCancelScanData,
        inBranchDc: BranchDcData
    });
    let BranchDcdb = TransformedData.filter(ele => ele.Pending === 0)

    // return BranchDcdb.slice().reverse();
    return jFLocalFactoryWideData({ inData: BranchDcdb, inBranch: modifiedBranch, fromDate, toDate }).reverse();
};

const jFLocalFactoryWideData = ({ inData, inBranch, fromDate, toDate }) => {
    return inData
        .filter(e => {
            const itemDate = e.DCDate.split('-').reverse().join('-').replace(/\//g, '-');

            return itemDate >= fromDate && itemDate <= toDate && e.BranchName === inBranch;
        })
        .reverse();
};

const MergeFunc = ({ BranchDc, EntryCancelScan, FromFactoryCancelScan, inBranchDc }) => {
    return BranchDc.map(dc => {
        const Sent = EntryCancelScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const Scanned = FromFactoryCancelScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const matchedBranchDC = inBranchDc.find(loopDC => loopDC.pk == dc.pk);

        return {
            ...dc,
            Sent,
            Scanned,
            Pending: Sent - Scanned,
            BranchName: matchedBranchDC?.BranchName,
            DCDate: matchedBranchDC?.Date,
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
// StartFunc({ inBranch: "LBC", fromDate: "22-03-2025", toDate: "22-03-2025" })
