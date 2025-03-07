import {
    DeleteFunc as DeleteFuncDal,
    ReferenceCheckFunc as ReferenceCheckFuncDal,
    DeleteSubKeyFunc as DeleteSubKeyFuncDal
} from '../../dals/DeleteFuncs/EntryFile.js';

import { DeleteFunc as DeleteFuncDalsForMongoDB } from '../../dalsForMongoDb/DeleteFuncs/EntryFile.js';

import ConfigJson from '../../../../../Config.json' assert {type: 'json'};

import { DeleteFunc as DeleteFuncDalForSequalize } from '../../dalsForSequelize/DeleteFuncs/EntryFile.js';

let DeleteSubKeyFunc = async ({ inId, inKey, inSubId }) => {
    if (ConfigJson.isSequelize) {
        return await DeleteFuncDalForSequalize({ inId });
    };

    if (ConfigJson.isMongoDb) {
        return await DeleteFuncDalsForMongoDB({ inId });
    };

    return await DeleteSubKeyFuncDal({ inId, inKey, inSubId });
};

let DeleteFunc = async ({ inId }) => {
    if (ConfigJson.isSequelize) {
        return await DeleteFuncDalForSequalize({ inId });
    }

    if (ConfigJson.isMongoDb) {
        return await DeleteFuncDalsForMongoDB({ inId });
    };
    return await DeleteFuncDal({ inId });
};

let ReferenceCheckFunc = async ({ inId }) => {
    if (ConfigJson.isSequelize) {
        return await DeleteFuncDalForSequalize({ inId });
    }

    if (ConfigJson.isMongoDb) {
        return await DeleteFuncDalsForMongoDB({ inId });
    };
    return await ReferenceCheckFuncDal({ inId });
};

export { DeleteFunc, ReferenceCheckFunc, DeleteSubKeyFunc };