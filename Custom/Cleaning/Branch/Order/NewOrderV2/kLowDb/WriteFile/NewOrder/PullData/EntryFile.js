import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../../../CommonFuncs/ReturnDbObjectWithSchema.js';

const StartFunc = ({ inBranch }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    const { dbObject: db } = StartFuncReturnDbObjectWithSchema({ inTable: inBranch });
    db.read();

    if (db.data?.error) return db.data;

    if (!Array.isArray(db.data)) {
        return { ...LocalReturnData, KReason: "Not array inside Json file..." };
    }

    if (db.data.length && Object.values(db.data[db.data.length - 1].ItemsInOrder || {}).length === 0) {
        return { ...LocalReturnData, KReason: "Last Order items empty." };
    }

    return { ...LocalReturnData, KTF: true, inDb: db };
};

export { StartFunc };
