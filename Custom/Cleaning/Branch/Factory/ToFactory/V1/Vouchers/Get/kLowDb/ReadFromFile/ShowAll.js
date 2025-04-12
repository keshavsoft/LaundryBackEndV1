import { StartFunc as CommonFunc } from "../CommonFuncs/AllFilterEntryFile.js";

let StartFunc = ({ inBranch,inFromDate, inToDate }) => {
    let LocalData = CommonFunc({ inBranch,inFromDate, inToDate });

    let LocalFilterData = LocalData.filter(element => element.SendDc === true || element.SendDc === undefined || element.ItemDetails === 0);
    
    return LocalFilterData;
};

export { StartFunc };
