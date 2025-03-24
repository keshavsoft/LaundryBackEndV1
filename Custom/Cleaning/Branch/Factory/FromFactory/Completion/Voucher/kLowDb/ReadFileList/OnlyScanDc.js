import { StartFunc as FactoryOut_DC } from '../CommonFuncs/FromApi/FactoryOut_DC.js';
import { StartFunc as FactoryOut_QrCodeScan } from '../CommonFuncs/FromApi/FactoryOut_QrCodeScan.js';
import { StartFunc as FromFactoryCancelScan } from '../CommonFuncs/FromApi/FromFactoryCancelScan.js';
import { StartFunc as CompletionDC } from '../CommonFuncs/FromApi/CompletionDC.js';

const CommonReplaceText = "BranOrders";

const StartFunc = ({ inBranch, fromDate, toDate }) => {
    let LocalBranch = inBranch.replace(CommonReplaceText, "");

    const EntryCancelDcData = FactoryOut_DC();
    const EntryCancelScanData = FactoryOut_QrCodeScan();
    const FromFactoryCancelScanData = FromFactoryCancelScan();
    const CompletionDCData = CompletionDC()
    const LocalFilterBranchDc = EntryCancelDcData.filter(e => e.BranchName === LocalBranch);

    const TransformedData = MergeFunc({
        BranchDc: LocalFilterBranchDc,
        EntryCancelScan: EntryCancelScanData,
        FromFactoryCancelScan: FromFactoryCancelScanData,
        inBranch: LocalBranch,
        inCompletionDC: CompletionDCData
    });

    let BranchDcdb = TransformedData.filter(ele => ele.Pending === 0)

    // return BranchDcdb.slice().reverse();
    return jFLocalFactoryWideData({ inData: BranchDcdb, inBranch: LocalBranch, fromDate, toDate }).reverse();

};

const jFLocalFactoryWideData = ({ inData, inBranch, fromDate, toDate }) => {
    return inData
        .filter(e => {
            const itemDate = e.DCDate.split('-').reverse().join('-').replace(/\//g, '-');

            return itemDate >= fromDate && itemDate <= toDate && e.BranchName === inBranch;
        })
        .reverse();
};

const MergeFunc = ({ BranchDc, EntryCancelScan, FromFactoryCancelScan, inBranch, inCompletionDC }) => {
    return BranchDc.map(dc => {
        const Sent = EntryCancelScan.filter(qr => qr.VoucherRef == dc.pk && qr.BranchName === inBranch).length;
        const Scanned = FromFactoryCancelScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const CompletionDC = inCompletionDC.find(qr => qr.pk == dc.pk);

        return {
            ...dc,
            Sent,
            Scanned,
            Pending: Sent - Scanned,
            BranchName: dc?.BranchName,
            DCDate: CompletionDC?.Date,
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
