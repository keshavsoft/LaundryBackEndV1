import { StartFunc as CommonFunc } from "../CommonFuncs/EntryFile.js";

let StartFunc = ({ inBranch }) => {
    let LocalData = CommonFunc({ inBranch });

    let LocalFilterData = LocalData.filter(element => element.SendDc === true);
    
    return LocalFilterData;
};

export { StartFunc };
