const CommonPressingScanFilterKey = "PressingScan";
const CommonCompletionScanFilterKey = "CompletionScan";
const CommonPressingReWashScanFilterKey = "PressingReWashScan";
const CommonPressingRejectScanScanFilterKey = "PressingRejectScan";


const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonPressingScanFilterKey] === true &&
        element[CommonPressingReWashScanFilterKey] === false &&
        element[CommonPressingRejectScanScanFilterKey] === false &&
        element[CommonCompletionScanFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
