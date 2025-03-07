const CommonCompletedScanFilterKey = "CompletedScanFactory";
const CommonCompletionScanFilterKey = "CompletionScan";



const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonCompletionScanFilterKey] === true &&
            // element[CommonWashingScanFilterKey] === false &&
            element[CommonCompletedScanFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
