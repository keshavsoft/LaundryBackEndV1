import { StartFunc as CommonFunc } from "../CommonFuncs/EntryFile.js";

let StartFunc = ({ inBranch }) => {
    let LocalData = CommonFunc({ inBranch });

    let today = new Date().toISOString().split('T')[0];

    let LocalFilterData = LocalData.filter(element => {
        let elementDate = new Date(element.DateTime).toISOString().split('T')[0];
        
        return (
            (element.SendDc === true || element.SendDc === undefined || element.ItemDetails === 0) && elementDate === today
        );
    });

    return LocalFilterData;
};

export { StartFunc };
