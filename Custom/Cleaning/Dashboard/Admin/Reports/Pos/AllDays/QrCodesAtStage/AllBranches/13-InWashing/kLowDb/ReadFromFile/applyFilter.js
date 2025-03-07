const CommonToFactoryFilterKey = "EntryScan";
const CommonWashingScanFilterKey = "WashingScan";
const CommonEntryRejectScanFilterKey = "EntryRejectScan";


const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonWashingScanFilterKey] === false &&
            element[CommonToFactoryFilterKey] === true && element[CommonEntryRejectScanFilterKey] == false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
