let StartFunc = ({ inGroupedData }) => {
    const grouped = inGroupedData;

    let LocalReturnArray = [];
    let LocalTodayQrCodes = [];

    const today = new Date().toISOString().split('T')[0];

    for (const [key, value] of Object.entries(grouped)) {
        if (key.startsWith("BranOrders")) continue;

        LocalReturnArray.push({
            BranchName: key,
            QrCount: value ? value.length : 0,
        });

        const todayQRCodes = value ? value.filter(qr => new Date(qr.BookingData.OrderData.Currentdateandtime).toISOString().split('T')[0] === today) : [];

        LocalTodayQrCodes.push({
            BranchName: key,
            QrCount: todayQRCodes.length,
        });
    }

    return { AllQrCodes: LocalReturnArray, TodayQrCodes: LocalTodayQrCodes };
};

export { StartFunc };
