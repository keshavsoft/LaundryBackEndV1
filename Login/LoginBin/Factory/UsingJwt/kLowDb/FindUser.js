import { StartFunc as StartFuncReturnDbObject } from "./CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inUsername, inPassword }) => {
    let LocalReturnData = { KTF: false };
    let LocalFromLowDb = StartFuncReturnDbObject();
    LocalFromLowDb.read();

    if (LocalFromLowDb.data.length) {
        let LocalUser = LocalFromLowDb.data.find(e => e.UserName === inUsername);

        if (!LocalUser) {
            return { KTF: false, KReason: `Wrong Username: ${inUsername}` };
        };

        if (LocalUser.Password !== inPassword) {
            return { KTF: false, KReason: `Wrong Password: ${inPassword}` };
        };

        if (!LocalUser.isAdminValidated) {
            return { KTF: false, KReason: `isAdminValidated: ${LocalUser.isMailValidated}` };
        };
        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LocalUser;
    }

    return LocalReturnData;
};



export { StartFunc };
