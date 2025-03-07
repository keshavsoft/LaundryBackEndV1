import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';

const GetIdFunc = (req, res) => {
    const { inId: LocalId, inFactory: LocalFactory } = req.params;

    const LocalFromRepo = GetIdFuncRepo({ inId: LocalId, inFactory: LocalFactory });

    if (!LocalFromRepo.KTF) {
        return res.status(401).json(LocalFromRepo.KReason);
    }

    return res.json(LocalFromRepo);
};

export { GetIdFunc };
