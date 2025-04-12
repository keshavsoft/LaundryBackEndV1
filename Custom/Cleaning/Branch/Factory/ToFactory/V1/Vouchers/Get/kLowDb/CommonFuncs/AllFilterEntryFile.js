import { StartFunc as BranchDc } from '../../../../../../../../../../binV4/BranToFactDC/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as BranchScan } from '../../../../../../../../../../binV4/BranToFactBScan/CommonPull/kLowDb/PullData/returnAsArray.js';
import { StartFunc as entryScan } from '../../../../../../../../../../binV4/BranToFactFScan/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let BranchDcdb = BranchDc();
    let BranchScandb = BranchScan();
    let LocalEntryScanData = entryScan();
    let modifiedBranch = inBranch.replace("BranOrders", "");

    let LocalFilterBranchDc = BranchDcdb.filter(e => e.BranchName === modifiedBranch);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: LocalFilterBranchDc,
        inBranchScan: BranchScandb,
        inEntryScanData: LocalEntryScanData
    });

    return jFLocalBranchWideData({ inData: jVarLocalTransformedData, inBranch: modifiedBranch, inFromDate, inToDate });
};

const jFLocalBranchWideData = ({ inData, inBranch, inFromDate, inToDate }) => {
    const fromDateObj = parseDDMMYYYY(inFromDate);
    const toDateObj = parseDDMMYYYY(inToDate);

    return inData.filter(e => {
        const dcDateObj = parseDDMMYYYY(e.DCDate.replace(/\//g, "-"));
        return dcDateObj >= fromDateObj && dcDateObj <= toDateObj && e.Branch === inBranch;
    }).reverse();
};

let jFLocalMergeFunc = ({ inBranchDc, inBranchScan, inEntryScanData }) => {
    return inBranchDc.map(loopDc => {
        let LocalFilterData = inBranchScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        let LocalScanFilter = inEntryScanData.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        let BranchDcFind = inBranchDc.find(e => e.pk == loopDc.pk);

        loopDc.Date = new Date(loopDc?.Date).toLocaleDateString('en-GB');
        loopDc.ItemDetails = LocalFilterData.length;
        loopDc.DCDate = BranchDcFind?.Date;
        loopDc.Branch = BranchDcFind?.BranchName;
        loopDc.EntryScanCount = LocalScanFilter.length;
        loopDc.pending = LocalFilterData.length - LocalScanFilter.length;
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
}

function parseDDMMYYYY(dateStr) {
    const [dd, mm, yyyy] = dateStr.split("-");
    return new Date(`${yyyy}-${mm}-${dd}`);
}
export { StartFunc };
// let LocalData = StartFunc({ inBranch: "BranOrdersLBC", inFromDate: "04-04-2025", inToDate: "05-04-2025" });
// console.log("LocalData:", LocalData);
