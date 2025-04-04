import { StartFunc as BranchScan } from '../../../../../../../../../binV4/BranToFactBScan/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inBranch, inId }) => {
    let LocalBranch = inBranch;
    let LocalRowpk = inId;

    const BranchScandb = BranchScan();

    let LocalFilterEntryScan = BranchScandb.filter(e => e.BranchName === LocalBranch && e.VoucherRef === LocalRowpk);
    let LocalReturnData = LocalFilterEntryScan.length;

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
