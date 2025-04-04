import { StartFunc as BranchDc } from '../CommonFuncs/FromApi/BranToFactDC.js';

const StartFunc = ({ inFactory }) => {
    const BranchDcdb = BranchDc();
    const LocalFilterBranchDc = BranchDcdb.filter(e => e.Factory === inFactory);
    
    return LocalFilterBranchDc.slice().reverse();
};

export { StartFunc };
