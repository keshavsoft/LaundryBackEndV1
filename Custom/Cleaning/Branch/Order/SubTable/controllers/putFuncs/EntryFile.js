import { putFuncs as PutFuncRepo } from "../../repos/putFuncs/EntryFile.js";

let putFuncs = (req, res) => {
  let LocalParams = req.params;
  let LocalBranch = LocalParams.inBranch;
  let LocalId = LocalParams.inId;
  let LocalRow = LocalParams.inRow;
  let LocalBody = req.body;

  let LocalFromRepo = PutFuncRepo({
    inBranch: LocalBranch,
    inRow: LocalRow,
    inId: LocalId,
    inPutBody: LocalBody,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  }

  return res.status(200).json(LocalFromRepo.KTF);
};

export { putFuncs };
