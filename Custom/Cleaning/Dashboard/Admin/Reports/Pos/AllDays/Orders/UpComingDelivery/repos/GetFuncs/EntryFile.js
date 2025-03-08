import {
    GetFuncs as GetFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch, fromDate, toDate  }) => {
    return GetFuncsDal({ inBranch, fromDate, toDate  });
};

export {
    GetFuncs
};