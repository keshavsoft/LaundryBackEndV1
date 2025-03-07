import { putFuncs as PutFuncDal } from "../../dals/putFuncs/EntryFile.js";

let putFuncs = ({ inBranch, inId, inRow, inPutBody }) => {
  return PutFuncDal({ inBranch, inId, inRow, inPutBody });
};

export { putFuncs };
