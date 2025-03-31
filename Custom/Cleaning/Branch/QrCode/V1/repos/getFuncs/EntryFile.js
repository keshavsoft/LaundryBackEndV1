import {
    GetFilterFunc as GetFilterFuncDal
} from '../../dals/getFuncs/EntryFile.js';


let GetFilterFunc = ({ inFilterKey, inFilterValue }) => {

    return GetFilterFuncDal({ inFilterKey, inFilterValue });
};
export {
    GetFilterFunc
};