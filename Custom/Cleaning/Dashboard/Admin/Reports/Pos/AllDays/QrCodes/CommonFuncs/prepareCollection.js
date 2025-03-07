let StartFunc = ({ inQrData, inBranchScandata, inEntryScanData, inPress_ReWashScanData, inWashingScanData, inPressingScanData, inCompletionScanData, inPressingRejectScanData, inEntryCancelScanData, inFactoryToBranch_Scan, inF_F_Entry_Return_ScanData, inF_F_Pressing_Return_ScanData, inF_F_Completion_ScanData, inTo_Delivery_ScanData }) => {
    let jVarLocalReturnObject = inQrData.map(loopQr => {
        const loopBranchScanFindData = inBranchScandata.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindEntryScan = inEntryScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindWashingScan = inWashingScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingScan = inPressingScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingRejectScan = inPressingRejectScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindCompletionScan = inCompletionScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindinPress_ReWashScan = inPress_ReWashScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindEntryCancelScan = inEntryCancelScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFactoryToBranch_Scan = inFactoryToBranch_Scan.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideF_F_Entry_Return_ScanData = inF_F_Entry_Return_ScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideF_F_Pressing_Return_ScanData = inF_F_Pressing_Return_ScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideF_F_Completion_ScanData = inF_F_Completion_ScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideinTo_Delivery_Scan = inTo_Delivery_ScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);

        const { BookingData: BookingDetails } = loopQr;

        return {
            QrCodeId: loopQr.pk,
            ItemName: loopQr.ItemName,
            Rate: loopQr.Rate,
            FactorySelected: loopQr.FactorySelected,
            OrderNo: loopQr.GenerateReference.ReferncePk,
            DeliveryDateTime: loopQr.DeliveryDateTime,
            location: loopQr.location,
            OrderNumber: loopQr.OrderNumber,
            OrderDateTime: BookingDetails.OrderData.Currentdateandtime,

            CustomerName: BookingDetails.CustomerData.CustomerName,
            CustomerMobileNumber: BookingDetails.CustomerData.Mobile,

            //BookingData complete object
            BookingData: loopQr.BookingData,

            // Status: match, 
            BranchScan: loopBranchScanFindData ? true : false,
            BranchScan_DC: loopBranchScanFindData?.VoucherRef,
            BranchScan_FactoryName: loopBranchScanFindData?.DCFactory,

            // FactoryScan: LoopInsideFindEntryScan,
            EntryScan: LoopInsideFindEntryScan ? true : false,
            EntryScan_DC: LoopInsideFindEntryScan?.VoucherRef,
            EntryScan_DCDate: LoopInsideFindEntryScan?.DCDate,
            EntryScan_FactoryName: LoopInsideFindEntryScan?.FactoryName,

            // EntryRetrun
            EntryReturnScan: LoopInsideFindEntryCancelScan ? true : false,
            EntryReturnScan_DC: LoopInsideFindEntryCancelScan?.VoucherRef,
            EntryReturnScan_DCDate: LoopInsideFindEntryCancelScan?.DCDate,
            EntryRetrunScan_FactoryName: LoopInsideFindEntryCancelScan?.FactoryName,

            // WashingScan
            WashingScan: LoopInsideFindWashingScan ? true : false,
            WashingScan_DC: LoopInsideFindWashingScan?.VoucherRef,
            WashingScan_DCDate: LoopInsideFindWashingScan?.DCDate,
            WashingScan_FactoryName: LoopInsideFindWashingScan?.FactoryName,

            // PressingScan
            PressingScan: LoopInsideFindPressingScan ? true : false,
            PressingScan_DC: LoopInsideFindPressingScan?.VoucherRef,
            PressingScan_DCDate: LoopInsideFindPressingScan?.DCDate,
            PressingScan_FactoryName: LoopInsideFindPressingScan?.FactoryName,

            // PressingRewash
            PressingRewash: LoopInsideFindinPress_ReWashScan ? true : false,
            PressingScan_DC: LoopInsideFindinPress_ReWashScan?.VoucherRef,
            PressingScan_DCDate: LoopInsideFindinPress_ReWashScan?.DCDate,
            PressingScan_FactoryName: LoopInsideFindinPress_ReWashScan?.FactoryName,

            // CompletionScan
            CompletionScan: LoopInsideFindCompletionScan ? true : false,
            CompletionScan_DC: LoopInsideFindCompletionScan?.VoucherRef,
            CompletionScan_DCDate: LoopInsideFindCompletionScan?.DCDate,
            CompletionScan_FactoryName: LoopInsideFindCompletionScan?.FactoryName,

            // PressingRejectScan
            PressingRejectScan: LoopInsideFindPressingRejectScan ? true : false,
            PressingRejectScan_DC: LoopInsideFindPressingRejectScan?.VoucherRef,
            PressingRejectScan_DCDate: LoopInsideFindPressingRejectScan?.DCDate,
            PressingRejectScan_FactoryName: LoopInsideFindPressingRejectScan?.FactoryName,

            // FactoryToBranchScan
            FactoryToBranchScan: LoopInsideFactoryToBranch_Scan ? true : false,
            FactoryToBranchScan_DC: LoopInsideFactoryToBranch_Scan?.VoucherRef,
            FactoryToBranchScan_DCDate: LoopInsideFactoryToBranch_Scan?.DCDate,
            FactoryToBranchScan_FactoryName: LoopInsideFactoryToBranch_Scan?.FactoryName,

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

            BranchName: loopQr.BookingData.OrderData.BranchName,
            TimeSpan: TimeSpan({ DateTime: loopQr.DateTime })
        };
    });

    return jVarLocalReturnObject;
};

const TimeSpan = ({ DateTime }) => {
    var diffMs = new Date() - new Date(DateTime);
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
};

export { StartFunc };
