import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/CustomeTable.js';
import { StartFunc as Users } from '../CommonFuncs/Users.js';

let StartFunc = ({ inId, inBranch }) => {
    let LocalPk = inId;
    let LocalBranchName = inBranch;

    const db = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    db.read();

    const UsersData = Users();

    let today = new Date().toLocaleDateString('en-GB');

    let LocalFilterBranchData = db.data.find(e => {
        return new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB') === today && e.pk == LocalPk;
    });

    let LocalFindUsers = UsersData.find(e => e.UserName == LocalFilterBranchData?.UserName);
    
    return {
        ...LocalFilterBranchData,
        BranchMobile: LocalFindUsers?.BranchMobile
    }
};

export { StartFunc };
// StartFunc({ inId:315, inBranch:"BranOrdersLBC" });



