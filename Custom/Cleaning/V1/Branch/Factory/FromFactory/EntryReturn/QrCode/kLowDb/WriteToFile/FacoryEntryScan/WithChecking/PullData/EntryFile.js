import { StartFunc as ReturnDbObjectWithSchema } from "../../../../../../../../../../../../../binV4/F_F_Entry_Return_Scan/Create/kLowDb/CommonFuncs/ReturnDbObjectWithSchema.js";

let StartFunc = () => {
    const LocalFromKLowDb = ReturnDbObjectWithSchema();

    return LocalFromKLowDb;
};

export { StartFunc };