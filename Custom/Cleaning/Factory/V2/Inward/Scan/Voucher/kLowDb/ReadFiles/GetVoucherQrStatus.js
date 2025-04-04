import { StartFunc as GetDc } from '../CommonFuncs/GetDc.js';

const StartFunc = ({ inFactory }) => {
    let BranchDcdb = GetDc({ inFactory });
    BranchDcdb = BranchDcdb.filter(ele => ele.SendDc && ele.Pending === 0)
    return BranchDcdb;
};

export { StartFunc };
