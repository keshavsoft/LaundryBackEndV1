const CommonRewashFilterKey = "PressingReWashScan";
const CommonPressingScanFilterKey = "PressingScan:";
// const CommonEntryRejectScanFilterKey = "EntryRejectScan";


const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonRewashFilterKey] == true && element[CommonPressingScanFilterKey] !== true;
    });
    
    

    return LocalFilteredArray;
};

export { StartFunc };
