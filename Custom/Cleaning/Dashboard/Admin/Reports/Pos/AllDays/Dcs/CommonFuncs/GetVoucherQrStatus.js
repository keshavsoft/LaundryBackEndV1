import { StartFunc as BranToFactDC } from './FromApi/BranToFactDC.js';
import { StartFunc as BranToFactBScan } from './FromApi/BranToFactBScan.js';
import { StartFunc as BranToFactFScan } from './FromApi/BranToFactFScan.js';
import { StartFunc as EntryCancelScan } from './FromApi/EntryCancelScan.js';

const StartFunc = () => {
    const BranToFactDCdb = BranToFactDC();
    const BranToFactBScanData = BranToFactBScan();
    const BranToFactFScanData = BranToFactFScan();
    const EntryCancelScanData = EntryCancelScan();

    // const LocalFilterBranToFactDC = BranToFactDCdb.filter(e => e.Factory === inFactory);

    const TransformedData = MergeFunc({
        BranToFactDC: BranToFactDCdb,
        BranToFactBScan: BranToFactBScanData,
        BranToFactFScan: BranToFactFScanData,
        EntryCancelScan: EntryCancelScanData
    });

    return TransformedData.slice().reverse();
};

const MergeFunc = ({ BranToFactDC, BranToFactBScan, BranToFactFScan, EntryCancelScan }) => {
    return BranToFactDC.map(dc => {
        const Sent = BranToFactBScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const Scanned = BranToFactFScan.filter(qr => qr.VoucherRef == dc.pk).length;
        const ScannedData = BranToFactFScan.filter(qr => qr.VoucherRef == dc.pk);
        // const EntryCancel = EntryCancelScan.filter(qr => EntryScan.some(scan => qr.QrCodeId == scan.QrCodeId && qr.VoucherRef == dc.pk)).length;
        const EntryCancelData = EntryCancelScan.filter(qr => BranToFactFScan.some(scan => qr.QrCodeId == scan.QrCodeId));
        let JVarLocalData = JFDCMergeFunc({ inEntryScan: ScannedData, inEntryCancel: EntryCancelData });
        const EntryCancel = JVarLocalData.filter(qr => BranToFactFScan.some(scan => qr.QrCodeId == scan.QrCodeId && scan.VoucherRef == qr.DCVoucherRef)).length;

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
