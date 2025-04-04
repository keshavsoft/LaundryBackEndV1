import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';
import { StartFunc as Users } from '../CommonFuncs/Users.js';

let StartFunc = ({ inId, inBranch }) => {
    let LocalPk = inId;
    let LocalBranchName = inBranch;

    const db = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    db.read();

    const UsersData = Users();

    let LocalFilterBranchData = db.data.find(e => e.pk == LocalPk);

    let LocalFindUsers = UsersData.find(e => e.UserName == LocalFilterBranchData?.UserName);
    
    return {
        ...LocalFilterBranchData,
        BranchMobile: LocalFindUsers?.BranchMobile
    }
};

export { StartFunc };
