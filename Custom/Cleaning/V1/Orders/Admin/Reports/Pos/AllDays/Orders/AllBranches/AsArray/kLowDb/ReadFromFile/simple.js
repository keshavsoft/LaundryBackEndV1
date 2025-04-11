import { StartFunc as buildData } from './CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();

    let LocalArrayReverseData = LocalQrCodeData.slice().reverse();

    const extractedData = LocalArrayReverseData.flatMap(item =>
        item.FileData.map(file => ({
            CustomerName: file.CustomerData.CustomerName,
            Mobile: file.CustomerData.Mobile,
            BranchName: file.OrderData.BranchName,
            OrderDate: new Date(file.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            OrderDateWithTime: new Date(file.OrderData.Currentdateandtime).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' }),
            OrderNumber: file.pk,
            TimeSpan: TimeSpan(file.OrderData.Currentdateandtime) 
        }))
    );

    return extractedData;
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
