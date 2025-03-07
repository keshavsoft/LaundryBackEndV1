import { StartFunc as BranchDc } from './FromApi/BranToFactDC.js';
import { StartFunc as BranchScan } from './FromApi/BranToFactBScan.js';
import { StartFunc as entryScan } from './FromApi/BranToFactFScan.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let BranchDcdb = BranchDc();
    let BranchScandb = BranchScan();
    let LocalEntryScanData = entryScan();
    const modifiedBranch = inBranch.replace("BranOrders", "");

    let LocalFilterBranchDc = BranchDcdb.filter(e => e.BranchName === modifiedBranch);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: LocalFilterBranchDc,
        inBranchScan: BranchScandb,
        inEntryScanData: LocalEntryScanData
    });

    return jFLocalBranchWideData({ inData: jVarLocalTransformedData, inFromDate, inToDate });
};

const jFLocalBranchWideData = ({ inData, inFromDate, inToDate }) =>
    inData
        .filter(e => {
            const itemDate = e.Date.split('/').join('-');
            return itemDate >= inFromDate && itemDate <= inToDate;
        })
        .reverse();

let jFLocalMergeFunc = ({ inBranchDc, inBranchScan, inEntryScanData }) => {
    return inBranchDc.map(loopDc => {
        let LocalFilterData = inBranchScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        let LocalScanFilter = inEntryScanData.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        loopDc.Date = new Date(loopDc?.Date).toLocaleDateString('en-GB');
        loopDc.BrancScan = LocalFilterData;
        loopDc.ItemDetails = LocalFilterData.length;
        loopDc.EntryScan = LocalScanFilter;
        loopDc.EntryScanCount = LocalScanFilter.length;
        loopDc.pending = LocalFilterData.length - LocalScanFilter.length
        loopDc.EntryDc = LocalScanFilter.length > 0;
        loopDc.SendDc = loopDc?.SendDc;
        loopDc.TimeSpan = TimeSpan(loopDc?.DateTime);
        return loopDc;
    });
};

function TimeSpan(DateTime) {
    let diffMs = new Date() - new Date(DateTime);
    let diffMonths = Math.floor(diffMs / 2629800000);
    let diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    let diffMins = Math.round((diffMs % 3600000) / 60000);

    return diffMonths > 0 ? `${diffMonths} months, ${diffDays} days, ${diffHrs} hours, ${diffMins} min` :
        diffDays > 0 ? `${diffDays} days, ${diffHrs} hours, ${diffMins} min` :
            diffHrs > 0 ? `${diffHrs} hours, ${diffMins} min` :
                `${diffMins} min`;
};

export { StartFunc };
