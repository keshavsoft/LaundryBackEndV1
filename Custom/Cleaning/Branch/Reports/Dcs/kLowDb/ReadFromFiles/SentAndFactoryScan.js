import { StartFunc as CommonFunc } from "../CommonFuncs/EntryFile.js";

let StartFunc = ({ inBranch, inFromDate, inToDate }) => {
    let LocalData = CommonFunc({ inBranch, inFromDate, inToDate });

    let LocalFilterData = LocalData.filter(element => element.EntryDc === true && element.pending === 0);

    return LocalFilterData;
};

export { StartFunc };
