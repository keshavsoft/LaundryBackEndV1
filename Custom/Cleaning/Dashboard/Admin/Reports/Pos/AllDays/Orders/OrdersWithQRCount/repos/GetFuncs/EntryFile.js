import {
    GetFuncs as GetFuncsDal,
    GetItemsFuncs as GetItemsFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, fromDate, toDate  }) => {
    return GetFuncsDal({ inBranch, fromDate, toDate  });
};

let GetItemsFuncs = ({ inBranch }) => {
    return GetItemsFuncsDal({ inBranch });
};

export {
    GetFuncs, GetItemsFuncs
};