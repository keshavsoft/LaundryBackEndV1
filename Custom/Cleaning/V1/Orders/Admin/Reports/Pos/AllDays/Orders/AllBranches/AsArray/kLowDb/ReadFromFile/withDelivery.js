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
            OrderDateWithTime: new Date(file.OrderData.Currentdateandtime).toLocaleDateString('en-GB',{hour:'2-digit', minute:'2-digit'}),
            OrderNumber: file.pk
        }))
    );

    return extractedData;
};


export { StartFunc };
