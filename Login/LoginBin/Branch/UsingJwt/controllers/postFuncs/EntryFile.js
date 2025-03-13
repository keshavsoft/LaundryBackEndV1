import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';
import { StartFunc as StartFuncCreateToken } from '../../../../../../Token/jwt/JwtBin/CreateToken.js';

const PostFunc = (req, res) => {
    const { UserName, Password } = req.body;

    const LocalFromRepo = PostFuncRepo({ inUsername: UserName, inPassword: Password });

    if (!LocalFromRepo.KTF) {
        res.status(401).json(LocalFromRepo).end();
        return;
    };

    const jVarLocalToken = StartFuncCreateToken({
        inObject: {
            DataPk: LocalFromRepo.JsonData.DataPk,
            Branch: LocalFromRepo.JsonData.Branch,
            UserName: LocalFromRepo.JsonData.UserName,
            UserUuId: LocalFromRepo.JsonData.UuId
        }
    });
    res.cookie('KSToken', jVarLocalToken, { maxAge: 900000, httpOnly: false }).end(jVarLocalToken);
};

export { PostFunc };