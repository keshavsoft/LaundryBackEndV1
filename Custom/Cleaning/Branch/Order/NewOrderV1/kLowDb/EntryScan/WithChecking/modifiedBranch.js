import defaultJson from './default.json' assert {type: 'json'};

const StartFunc = ({ inBranch }) => {
    let LocalBranch = inBranch;
    let LocalDefalultKeys = defaultJson;
    const modifiedBranch = LocalBranch.replace("BranOrders", "");
    LocalDefalultKeys.OrderData.BranchName = modifiedBranch;
    LocalDefalultKeys.OrderData.Currentdateandtime = Timestamp();
    return LocalDefalultKeys
};
const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

export { StartFunc };