// import { StartFunc as CommonReadAllFiles } from "../../../../../../../../../../Common/CommonReadFiles/readAllFiles.js";

import { StartFunc as CommonReadAllFiles } from "../../../../../../../../../../../../../../../Common/CommonReadFiles/readAllFiles.js";

const StartFunc = () => {
    let LocalCommonReadFiles = CommonReadAllFiles();

    if (LocalCommonReadFiles.KTF === false) {
        return { ...LocalCommonReadFiles }
    };

    let LocalReturnArray = LocalCommonReadFiles.JsonData
        .filter(name => name.FileName.startsWith('BranOrders'))

    return LocalReturnArray;
};

export { StartFunc };
