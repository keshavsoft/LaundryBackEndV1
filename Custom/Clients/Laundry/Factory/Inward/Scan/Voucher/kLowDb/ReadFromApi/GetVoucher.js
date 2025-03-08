import { StartFunc as BranchDc } from '../../../../../../../../../binV4/BranchDC/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = () => {
    const BranchDcdb = BranchDc();

    return BranchDcdb;
};

export { StartFunc };
