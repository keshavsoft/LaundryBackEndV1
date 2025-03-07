const CommonPressingScanFilterKey = "PressingScan";
const CommonPressingReWashScanFilterKey = "PressingReWashScan";
const CommonCompletionScanFilterKey = "CompletionScan";
const CommonPressingRejectScanScanFilterKey = "PressingRejectScan";


const StartFunc = ({ inQrcodeArray, inBranchName }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonPressingScanFilterKey] === true &&
            element[CommonPressingReWashScanFilterKey] === false &&
            element[CommonPressingRejectScanScanFilterKey] === false &&
            element[CommonCompletionScanFilterKey] === false &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
