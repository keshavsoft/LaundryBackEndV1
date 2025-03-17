import { StartFunc as MastersCustomers } from "../../CommonFuncs/MastersCustomers.js";
import { StartFunc as modifiedBranch } from "./modifiedBranch.js";
import os from 'os';

const StartFunc = ({ inMobileNumber, inData, inBranch, inUserName }) => {
    let LocalInData = inData;
    let LocalCustomerNumber = inMobileNumber;
    let LocalBranch = inBranch;
    let LocalUserName = inUserName;
    // let LocalOs = os.platform();
    // console.log(LocalOs);

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalDefalultKeys = modifiedBranch({ inBranch: LocalBranch });
    let LocalMastersCustomers = MastersCustomers();
    let LocalArrayPk = LocalInData.map(element => element.pk);
    let LocalMastersFindCustomers = LocalMastersCustomers.find(element => element.Mobile === LocalCustomerNumber);

    if (LocalMastersFindCustomers === undefined) {
        LocalReturnData.KReason = "No Customer Data"
        return LocalReturnData;
    };

    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);

    LocalReturnData.InsertData = {
        ...LocalDefalultKeys, UuId: uuidv4(), pk: MaxPk,
        CustomerData: { ...LocalMastersFindCustomers, CustomerMobile: LocalMastersFindCustomers?.Mobile },
        UserName: LocalUserName,
        IpAddress: getSystemIPAddress(),
        DateTime: Timestamp()
    };

    LocalReturnData.KTF = true;
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const getSystemIPAddress = () => {
    const interfaces = os.networkInterfaces();
    for (const iface of Object.values(interfaces).flat()) {
        if (iface.family === 'IPv4' && !iface.internal) {
            return iface.address;
        }
    }
    return '0.0.0.0';
};

export { StartFunc };