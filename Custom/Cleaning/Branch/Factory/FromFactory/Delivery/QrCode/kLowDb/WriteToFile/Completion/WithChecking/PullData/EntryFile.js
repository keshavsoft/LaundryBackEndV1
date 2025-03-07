import { StartFunc as ReturnDbObjectWithSchema } from "../../../../../../../../../../../../binV4/To_Delivery_Scan/Create/kLowDb/CommonFuncs/ReturnDbObjectWithSchema.js";

let StartFunc = () => {
    const LocalFromKLowDb = ReturnDbObjectWithSchema();

    return LocalFromKLowDb;
};

export { StartFunc };