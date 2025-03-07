let StartFunc = ({ inQrData, inBranchScandata, inEntryScanData, inWashingScanData, inPressingScanData, inCompletionScanData, inPressingRejectScanData, inFactoryToBranch, inEntryRejectScanData, inPressingReWashScanData, inDeliveryData, inF_F_Entry_Return_ScanData, inF_F_Pressing_Return_ScanData, inF_F_Completion_ScanData, inTo_Delivery_ScanData }) => {
    let jVarLocalReturnObject = inQrData.map(loopQr => {
        const loopBranchScanFindData = inBranchScandata.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindEntryScan = inEntryScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindWashingScan = inWashingScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingScan = inPressingScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingRejectScan = inPressingRejectScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindCompletionScan = inCompletionScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindFactoryToBranchScan = inFactoryToBranch.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindEntryRejectScan = inEntryRejectScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingRewashScan = inPressingReWashScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindDelivery = inDeliveryData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideF_F_Entry_Return_ScanData = inF_F_Entry_Return_ScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideF_F_Pressing_Return_ScanData = inF_F_Pressing_Return_ScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideF_F_Completion_ScanData = inF_F_Completion_ScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideinTo_Delivery_Scan = inTo_Delivery_ScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);

        let LoopInsideReturnObject = {
            QrCodeId: loopQr.pk,
            ItemName: loopQr.ItemName,
            Rate: loopQr.Rate,
            FactorySelected: loopQr.FactorySelected,
            OrderNo: loopQr.GenerateReference.ReferncePk,
            DeliveryDateTime: loopQr.DeliveryDateTime,
            location: loopQr.location,
            OrderDateTime: formatDateTime(loopQr.BookingData.OrderData.Currentdateandtime),

            // Status: match,  
            BranchScan: loopBranchScanFindData ? true : false,
            BranchScan_DC: loopBranchScanFindData?.VoucherRef,
            BranchScan_FactoryName: loopBranchScanFindData?.DCFactory,
            BranchScan_Date: loopBranchScanFindData?.DateTime,

            // FactoryScan: LoopInsideFindEntryScan,
            EntryScan: LoopInsideFindEntryScan ? true : false,
            EntryScan_DC: LoopInsideFindEntryScan?.VoucherRef,
            EntryScan_DCDate: LoopInsideFindEntryScan?.DCDate,
            EntryScan_FactoryName: LoopInsideFindEntryScan?.FactoryName,

            EntryRejectScan: LoopInsideFindEntryRejectScan ? true : false,
            EntryRejectScan_DC: LoopInsideFindEntryRejectScan?.VoucherRef,
            EntryRejectScan_DCDate: LoopInsideFindEntryRejectScan?.DCDate,
            EntryRejectScan_FactoryName: LoopInsideFindEntryRejectScan?.FactoryName,

            WashingScan: LoopInsideFindWashingScan ? true : false,
            WashingScan_DC: LoopInsideFindWashingScan?.VoucherRef,
            WashingScan_DCDate: LoopInsideFindWashingScan?.DCDate,
            WashingScan_FactoryName: LoopInsideFindWashingScan?.FactoryName,
            WashingScan_ReWash: LoopInsideFindWashingScan?.ReWash,

            PressingScan: LoopInsideFindPressingScan ? true : false,
            PressingScan_DC: LoopInsideFindPressingScan?.VoucherRef,
            PressingScan_DCDate: LoopInsideFindPressingScan?.DCDate,
            PressingScan_FactoryName: LoopInsideFindPressingScan?.FactoryName,
            PressingScan_ReWash: LoopInsideFindPressingScan?.ReWash,

            PressingReWashScan: LoopInsideFindPressingRewashScan ? true : false,
            PressingReWashScan_DC: LoopInsideFindPressingRewashScan?.VoucherRef,
            PressingReWashScan_DCDate: LoopInsideFindPressingRewashScan?.DCDate,
            PressingReWashScan_FactoryName: LoopInsideFindPressingRewashScan?.FactoryName,

            CompletionScan: LoopInsideFindCompletionScan ? true : false,
            CompletionScan_DC: LoopInsideFindCompletionScan?.VoucherRef,
            CompletionScan_DCDate: LoopInsideFindCompletionScan?.DCDate,
            CompletionScan_FactoryName: LoopInsideFindCompletionScan?.FactoryName,

            PressingRejectScan: LoopInsideFindPressingRejectScan ? true : false,
            PressingRejectScan_DC: LoopInsideFindPressingRejectScan?.VoucherRef,
            PressingRejectScan_DCDate: LoopInsideFindPressingRejectScan?.DCDate,
            PressingRejectScan_FactoryName: LoopInsideFindPressingRejectScan?.FactoryName,

            CompletedScanFactory: LoopInsideFindFactoryToBranchScan ? true : false,
            CompletedScanFactory_DC: LoopInsideFindFactoryToBranchScan?.VoucherRef,
            CompletedScanFactory_DCDate: LoopInsideFindFactoryToBranchScan?.DCDate,
            CompletedScanFactory_FactoryName: LoopInsideFindFactoryToBranchScan?.FactoryName,

            DeliveryScan: LoopInsideFindDelivery ? true : false,
            DeliveryScan_DC: LoopInsideFindDelivery?.VoucherRef,
            DeliveryScan_DCDate: LoopInsideFindDelivery?.DCDate,
            DeliveryScan_FactoryName: LoopInsideFindDelivery?.FactoryName,

            // F_F_Entry_Return_Scan
            F_F_Entry_Return_Scan: LoopInsideF_F_Entry_Return_ScanData ? true : false,
            F_F_Entry_Return_Scan_DC: LoopInsideF_F_Entry_Return_ScanData?.VoucherRef,
            F_F_Entry_Return_Scan_DCDate: LoopInsideF_F_Entry_Return_ScanData?.DCDate,
            F_F_Entry_Return_Scan_FactoryName: LoopInsideF_F_Entry_Return_ScanData?.FactoryName,

            // F_F_Pressing_Return_Scan
            F_F_Pressing_Return_Scan: LoopInsideF_F_Pressing_Return_ScanData ? true : false,
            F_F_Pressing_Return_Scan_DC: LoopInsideF_F_Pressing_Return_ScanData?.VoucherRef,
            F_F_Pressing_Return_Scan_DCDate: LoopInsideF_F_Pressing_Return_ScanData?.DCDate,
            F_F_Pressing_Return_Scan_FactoryName: LoopInsideF_F_Pressing_Return_ScanData?.FactoryName,

            // F_F_Completion_Scan
            F_F_Completion_Scan: LoopInsideF_F_Completion_ScanData ? true : false,
            F_F_Completion_Scan_DC: LoopInsideF_F_Completion_ScanData?.VoucherRef,
            F_F_Completion_Scan_DCDate: LoopInsideF_F_Completion_ScanData?.DCDate,
            F_F_Completion_Scan_FactoryName: LoopInsideF_F_Completion_ScanData?.FactoryName,

            // To_Delivery_Scan
            To_Delivery_Scan: LoopInsideinTo_Delivery_Scan ? true : false,
            To_Delivery_Scan_DC: LoopInsideinTo_Delivery_Scan?.VoucherRef,
            To_Delivery_Scan_DCDate: LoopInsideinTo_Delivery_Scan?.DCDate,
            To_Delivery_Scan_FactoryName: LoopInsideinTo_Delivery_Scan?.FactoryName,


            BranchName: loopQr.BookingData.OrderData.BranchName
        };

        // if (loopQr.pk === 25) {
        //     console.log("aaaaaaa : ", loopQr);
        // };

        // LoopInsideReturnObject.TimeSpan = TimeSpan({ inDateTime: loopQr.BookingData.OrderData.Currentdateandtime });
        LoopInsideReturnObject.TimeSpan = TimeSpan({ inDateTime: loopQr.DateTime });

        return LoopInsideReturnObject;
    });

    return jVarLocalReturnObject;
};

function TimeSpan({ inDateTime }) {
    let LocalPresentData = new Date();
    var diffMs = LocalPresentData - new Date(inDateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
}

function formatDateTime(orderDateTime) {
    const date = new Date(orderDateTime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${day}/${month}/${year} ${hours}:${minutes} ${amPm}`;
}

export { StartFunc };
