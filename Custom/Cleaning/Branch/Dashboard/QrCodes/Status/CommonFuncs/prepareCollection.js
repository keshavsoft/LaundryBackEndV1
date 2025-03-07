let StartFunc = ({ inQrData, inBranchScandata, inEntryScanData}) => {
    let jVarLocalReturnObject = inQrData.map(loopQr => {
        const loopBranchScanFindData = inBranchScandata.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        const LoopInsideFindEntryScan = inEntryScanData.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        
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
            OrderDateTime:  BookingDetails.OrderData.Currentdateandtime,

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
            EntryScan_FactoryName: loopBranchScanFindData?.FactoryName,

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
