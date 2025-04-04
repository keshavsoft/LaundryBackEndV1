import { StartFunc as BranchDc } from './FromApi/BranToFactDC.js';
import { StartFunc as BranchScan } from './FromApi/BranToFactBScan.js';
import { StartFunc as EntryScan } from './FromApi/BranToFactFScan.js';
import { StartFunc as EntryCancelScan } from './FromApi/EntryCancelScan.js';
import { StartFunc as QrCodes } from './FromApi/QrCodes.js';

const StartFunc = ({ inFactory }) => {
    const BranchDcdb = BranchDc();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();
    const EntryCancelScanData = EntryCancelScan();
    const QrCodeData = QrCodes();

    const LocalFilterBranchDc = BranchDcdb.filter(e => e.Factory === inFactory);
    let LocanBranchScanData = BranchScanData.map(ele => {
        let LocalFind = QrCodeData.find(e => e.pk === ele.QrCodeId);
        return {
            ...ele,
            OrderNumber: LocalFind?.OrderNumber
        };
    });

    const TransformedData = MergeFunc({
        BranchDc: LocalFilterBranchDc,
        BranchScan: LocanBranchScanData,
        EntryScan: EntryScanData,
        EntryCancelScan: EntryCancelScanData,
        inQrCoses: QrCodeData, inFactory
    });

    return TransformedData.reverse();
};

const MergeFunc = ({ BranchDc, BranchScan, EntryScan, EntryCancelScan, inQrCoses, inFactory }) =>
    BranchDc.map(dc => {
        const SentData = BranchScan.filter(qr => qr.VoucherRef == dc.pk);
        const ScannedData = EntryScan.filter(qr => qr.VoucherRef == dc.pk);
        const LocalOrderNumbers = SentData.filter((item, index, self) =>
            index === self.findIndex(el => el.OrderNumber === item.OrderNumber));

        const LocalGenOrderQrsLength = LocalOrderNumbers.map(element =>
            inQrCoses.filter(qr => qr.OrderNumber == element.OrderNumber &&
                qr.BookingData.OrderData.BranchName == element.BranchName && qr.location == inFactory).length
        ).reduce((a, b) => a + b, 0);

        const EntryCancelData = EntryCancelScan.filter(qr =>
            EntryScan.some(scan => qr.QrCodeId == scan.QrCodeId));

        const JVarLocalData = JFDCMergeFunc({ inEntryScan: ScannedData, inEntryCancel: EntryCancelData });
        const EntryCancel = JVarLocalData.filter(qr =>
            EntryScan.some(scan => qr.QrCodeId == scan.QrCodeId && scan.VoucherRef == qr.DCVoucherRef)).length;

        return {
            ...dc,
            Gen: LocalGenOrderQrsLength,
            Sent: SentData.length,
            Scanned: ScannedData.length,
            Pending: SentData.length - ScannedData.length,
            EntryCancel,
            TimeSpan: TimeSpan(dc.DateTime)
        };
    });


const TimeSpan = DateTime => {
    const diffMs = new Date() - new Date(DateTime);
    const diffMonths = Math.floor(diffMs / 2629800000);
    const diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    const diffMins = Math.round((diffMs % 3600000) / 60000);

    return diffMonths > 0 ? `${diffMonths} months, ${diffDays} days, ${diffHrs} hrs, ${diffMins} min`
        : diffDays > 0 ? `${diffDays} days, ${diffHrs} hrs, ${diffMins} min`
            : diffHrs > 0 ? `${diffHrs} hrs, ${diffMins} min`
                : `${diffMins} min`;
};

const JFDCMergeFunc = ({ inEntryScan, inEntryCancel }) => {
    return inEntryCancel.map(element => {
        let LocalFilter = inEntryScan.find(qr => qr.QrCodeId == element.QrCodeId);
        return { ...element, DCVoucherRef: LocalFilter?.VoucherRef };
    });
}

export { StartFunc };
