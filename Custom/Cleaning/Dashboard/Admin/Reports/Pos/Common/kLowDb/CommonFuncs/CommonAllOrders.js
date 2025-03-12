import { StartFunc as CommonReadAllFiles } from "../../../../../../../../../Common/CommonReadFiles/readAllFiles.js";

const StartFunc = () => {
    const { KTF, JsonData } = CommonReadAllFiles();
    if (!KTF) return { KTF, JsonData };

    return JsonData.filter(name => name.FileName.startsWith('BranOrders'))
        .flatMap(element => element.FileName);
};

export { StartFunc };
