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
            OrderNumber: file.pk
        }))
    );

    return extractedData;
};


export { StartFunc };
