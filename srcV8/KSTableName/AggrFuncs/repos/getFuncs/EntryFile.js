import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal, GetDataCountFunc as GetDataCountFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalForSequlize,
    GetDataOnlyFunc as GetDataOnlyFuncDalsForSequelize,
    GetDataCountFunc as GetDataCountFuncDalsForSequelize
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalForMongoDb,
    GetDataOnlyFunc as GetDataOnlyFuncDalsForMongoDb,
    GetDataCountFunc as GetDataCountFuncDalsForMongoDb
} from '../../dalsForMongoDb/getFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let GetFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetFuncDalForSequlize();
    };

    if (ConfigJson.isMongoDb) {
        return await GetFuncDalForMongoDb();
    };

    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return await GetDataOnlyFuncDalsForMongoDb();
    };

    return GetDataOnlyFuncDal();
};

let GetDataCountFunc = async ({ inKey, inValue }) => {
    if (ConfigJson.isSequelize) {
        return await GetDataCountFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return await GetDataCountFuncDalsForMongoDb();
    };

    return GetDataCountFuncDal({ inKey, inValue });
};


export {
    GetFunc, GetDataOnlyFunc, GetDataCountFunc
};