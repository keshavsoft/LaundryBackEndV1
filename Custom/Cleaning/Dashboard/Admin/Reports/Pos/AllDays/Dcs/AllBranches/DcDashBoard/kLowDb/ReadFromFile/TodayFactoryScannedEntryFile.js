import { StartFunc as TodayFactoryScanned } from "./TodayFactoryScanned.js";

let StartFunc = ({ inFactory, inId }) => {
    let LocalData = TodayFactoryScanned({ inFactory, inId });
    let today = new Date().toISOString().split("T")[0];

    let FilteredData = LocalData.filter(item => {
        const date = new Date(item.DCDate);
        const formattedDate = `${date.getFullYear()}-${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        return formattedDate === today;
    });

    return FilteredData;
};



export { StartFunc };
