let StartFunc = ({ inQrData, inPress_ReWashScanData, inWashingScanData, inPressingScanData, inCompletionScanData, inPressingRejectScanData, inEntryCancelScanData, inFactoryToBranch_Scan }) => {
    let jVarLocalReturnObject = inQrData.map(loopQr => {
        const LoopInsideFindWashingScan = inWashingScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingScan = inPressingScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindPressingRejectScan = inPressingRejectScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindCompletionScan = inCompletionScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindinPress_ReWashScan = inPress_ReWashScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindEntryCancelScan = inEntryCancelScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFactoryToBranch_Scan = inFactoryToBranch_Scan.find(loopScan => loopScan.QrCodeId == loopQr.pk);

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
            // FactoryScan: LoopInsideFindEntryScan,

            // EntryRetrun
            EntryReturnScan: LoopInsideFindEntryCancelScan ? true : false,
            EntryReturnScan_DC: LoopInsideFindEntryCancelScan?.VoucherRef,
            EntryReturnScan_DCDate: LoopInsideFindEntryCancelScan?.DCDate,
            EntryRetrunScan_FactoryName: LoopInsideFindEntryCancelScan?.FactoryName,

            WashingScan: LoopInsideFindWashingScan ? true : false,
            WashingScan_DC: LoopInsideFindWashingScan?.VoucherRef,
            WashingScan_DCDate: LoopInsideFindWashingScan?.DCDate,
            WashingScan_FactoryName: LoopInsideFindWashingScan?.FactoryName,

            PressingScan: LoopInsideFindPressingScan ? true : false,
            PressingScan_DC: LoopInsideFindPressingScan?.VoucherRef,
            PressingScan_DCDate: LoopInsideFindPressingScan?.DCDate,
            PressingScan_FactoryName: LoopInsideFindPressingScan?.FactoryName,

            // PressingRewash
            PressingRewash: LoopInsideFindinPress_ReWashScan ? true : false,
            PressingScan_DC: LoopInsideFindinPress_ReWashScan?.VoucherRef,
            PressingScan_DCDate: LoopInsideFindinPress_ReWashScan?.DCDate,
            PressingScan_FactoryName: LoopInsideFindinPress_ReWashScan?.FactoryName,

            CompletionScan: LoopInsideFindCompletionScan ? true : false,
            CompletionScan_DC: LoopInsideFindCompletionScan?.VoucherRef,
            CompletionScan_DCDate: LoopInsideFindCompletionScan?.DCDate,
            CompletionScan_FactoryName: LoopInsideFindCompletionScan?.FactoryName,

            PressingRejectScan: LoopInsideFindPressingRejectScan ? true : false,
            PressingRejectScan_DC: LoopInsideFindPressingRejectScan?.VoucherRef,
            PressingRejectScan_DCDate: LoopInsideFindPressingRejectScan?.DCDate,
            PressingRejectScan_FactoryName: LoopInsideFindPressingRejectScan?.FactoryName,

            FactoryToBranchScan: LoopInsideFactoryToBranch_Scan ? true : false,
            FactoryToBranchScan_DC: LoopInsideFactoryToBranch_Scan?.VoucherRef,
            FactoryToBranchScan_DCDate: LoopInsideFactoryToBranch_Scan?.DCDate,
            FactoryToBranchScan_FactoryName: LoopInsideFactoryToBranch_Scan?.FactoryName,

            BranchName: loopQr.BookingData.OrderData.BranchName,
            TimeSpan: TimeSpan({ DateTime: loopQr.DateTime })
        };
    });

    return jVarLocalReturnObject;
};

function TimeSpan({ DateTime }) {
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
}

export { StartFunc };
