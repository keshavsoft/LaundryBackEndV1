import { DeleteFunc as DeleteFuncRepo } from '../../repos/deleteFuncs/EntryFile.js';

let DeleteFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.Id;

    let LocalFromRepo = DeleteFuncRepo({ InId: LocalId });

    res.json(LocalFromRepo);
};

export { DeleteFunc };