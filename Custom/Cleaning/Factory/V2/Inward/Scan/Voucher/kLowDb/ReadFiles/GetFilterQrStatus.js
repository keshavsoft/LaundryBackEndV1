import { StartFunc as GetDc } from '../CommonFuncs/GetDcByFilter.js';

const StartFunc = ({  inFactory, fromDate, toDate  }) => {
    let BranchDcdb = GetDc({  inFactory, fromDate, toDate  });
    BranchDcdb = BranchDcdb.filter(ele => ele.SendDc && ele.Pending === 0)
    return BranchDcdb;
};

export { StartFunc };
