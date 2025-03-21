import { StartFunc as MastersCustomers } from "../../CommonFuncs/MastersCustomers.js";
import { StartFunc as StartFuncFromInsertDefaults } from "./insertDefaults.js";
import os from "os";

const StartFunc = ({ inMobileNumber, inData, inBranch, inUserName }) => {
    let LocalReturnData = { KTF: false, CreatedLog: {} };

    let LocalDefalultKeys = StartFuncFromInsertDefaults({ inBranch });
    let LocalMastersCustomers = MastersCustomers();

    let LocalMastersFindCustomers = LocalMastersCustomers.find(({ Mobile }) => Mobile === inMobileNumber);

    if (!LocalMastersFindCustomers) {
        return { ...LocalReturnData, KReason: "No Customer Data" };
    }

    const MaxPk = Math.max(0, ...inData.map(({ pk }) => Number(pk) || 0)) + 1;

    LocalReturnData.InsertData = {
        ...LocalDefalultKeys,
        UuId: uuidv4(),
        pk: MaxPk,
        CustomerData: { ...LocalMastersFindCustomers, CustomerMobile: LocalMastersFindCustomers.Mobile },
        UserName: inUserName,
        IpAddress: getSystemIPAddress(),
        DateTime: Timestamp()
    };

    return { ...LocalReturnData, KTF: true };
};

const Timestamp = () => new Date().toISOString();

const uuidv4 = () =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c =>
        ((Math.random() * 16) | 0 & (c === 'x' ? 15 : 3)).toString(16)
    );

const getSystemIPAddress = () => {
    const interfaces = os.networkInterfaces();
    return Object.values(interfaces).flat()
        .find(({ family, internal }) => family === 'IPv4' && !internal)?.address || '0.0.0.0';
};

export { StartFunc };
