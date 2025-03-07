import { StartFunc as StartFuncReturnDbObject } from "../CommonFuncs/ReturnDbObjectWithSchema.js";

const StartFunc = async ({ inBranch, inmainId, inId, AddOnKey }) => {
    const db = StartFuncReturnDbObject({ inTable: inBranch }).dbObject;

    db.read();
    const LocalarrayOfObjects = db.data;
    const LocalFindId = LocalarrayOfObjects.find(obj => obj.UuId === parseInt(inmainId));

    if (!LocalFindId) {
        return { KTF: false, KReason: `Id : ${inmainId} not found in data` };
    }

    if (!("ItemsInOrder" in LocalFindId)) {
        return { KTF: false, KReason: `Key : ItemsInOrder not found in Row` };
    }

    removeAddOn(LocalFindId, inId, AddOnKey);
    db.write();

    return { KTF: true };
};

const removeAddOn = (order, inId, addOnService) => {
    const item = order.ItemsInOrder[inId];
    if (item && item.AddOnArray) {
        const index = item.AddOnArray.findIndex(addOn => addOn.AddOnService === addOnService);
        if (index !== -1) {
            const addOn = item.AddOnArray[index];
            item.Total -= addOn.AddOnRate * parseInt(item.Pcs);
            item.AddOnArray.splice(index, 1);
        }
    }
};

// Usage
// StartFunc({ inBranch: "KKD", inmainId: 18, inId: "7", AddOnKey: "Strain2" });

export { StartFunc };
