import { StartFunc as BranchDc } from '../CommonFuncs/FromApi/BranToFactDC.js';
import { StartFunc as BranchScan } from '../CommonFuncs/FromApi/BranToFactBScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/FromApi/BranToFactFScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/FromApi/EntryCancelScan.js';

const StartFunc = ({ inFactory }) => {
    const BranchDcdb = BranchDc();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();
    const EntryCancelScanData = EntryCancelScan();

    const LocalFilterBranchDc = BranchDcdb.filter(e => e.Factory === inFactory);

    const TransformedData = MergeFunc({
        BranchDc: LocalFilterBranchDc,
        BranchScan: BranchScanData,
        EntryScan: EntryScanData,
        EntryCancelScan: EntryCancelScanData
    });

    return TransformedData.slice().reverse();
};

const MergeFunc = ({ BranchDc, BranchScan, EntryScan, EntryCancelScan }) => {
    return BranchDc.map(dc => {
        const Sent = BranchScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const Scanned = EntryScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const ScannedData = EntryScan.filter(qr => qr.VoucherRef == dc.pk);
        // const EntryCancel = EntryCancelScan.filter(qr => EntryScan.some(scan => qr.QrCodeId == scan.QrCodeId && qr.VoucherRef == dc.pk)).length;
        const EntryCancelData = EntryCancelScan.filter(qr => EntryScan.some(scan => qr.QrCodeId == scan.QrCodeId));
        let JVarLocalData = JFDCMergeFunc({ inEntryScan: ScannedData, inEntryCancel: EntryCancelData });
        const EntryCancel = JVarLocalData.filter(qr => EntryScan.some(scan => qr.QrCodeId == scan.QrCodeId && scan.VoucherRef == qr.DCVoucherRef)).length;

        return {
            ...dc,
            Sent,
            Scanned,
            Pending: Sent - Scanned,
            EntryCancel,
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

let JFDCMergeFunc = ({ inEntryScan, inEntryCancel }) => {
    return inEntryCancel.map(element => {
        let LocalFilter = inEntryScan.find(qr => qr.QrCodeId == element.QrCodeId);
        return {
            ...element,
            DCVoucherRef: LocalFilter?.VoucherRef
        }
    });
}

export { StartFunc };
