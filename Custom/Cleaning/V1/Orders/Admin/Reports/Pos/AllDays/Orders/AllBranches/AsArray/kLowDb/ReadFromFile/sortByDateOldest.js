import { StartFunc as buildData } from './CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();
    let LocalAllOrdersArray = [];

    LocalQrCodeData.forEach(item => {
        item.FileData.forEach(file => {
            LocalAllOrdersArray.push({
                CustomerName: file.CustomerData.CustomerName,
                Mobile: file.CustomerData.Mobile,
                BranchName: file.OrderData.BranchName,
                OrderDate: file.OrderData.Currentdateandtime,
                OrderDateWithTime: new Date(file.OrderData.Currentdateandtime).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' }),
                OrderNumber: file.pk,
                TimeSpan: TimeSpan(file.OrderData.Currentdateandtime)
            });
        });
    });

    const LocalSortedData = LocalAllOrdersArray.sort((a, b) => {
        const nameA = a.OrderDate; // ignore upper and lowercase
        const nameB = b.OrderDate; // ignore upper and lowercase

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    //const LocalSortedData = _.sortBy(extractedData, "OrderDate");

    return LocalSortedData;
};

const TimeSpan = (dateTime) => {
    const now = new Date();
    const past = new Date(dateTime);
    const diffMs = now - past;

    const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
    const diffDays = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const diffHrs = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffMonths > 0) return `${diffMonths} months, ${diffDays} days, ${diffHrs} hrs, ${diffMins} min`;
    if (diffDays > 0) return `${diffDays} days, ${diffHrs} hrs, ${diffMins} min`;
    if (diffHrs > 0) return `${diffHrs} hrs, ${diffMins} min`;

    return `${diffMins} min`;
};


export { StartFunc };