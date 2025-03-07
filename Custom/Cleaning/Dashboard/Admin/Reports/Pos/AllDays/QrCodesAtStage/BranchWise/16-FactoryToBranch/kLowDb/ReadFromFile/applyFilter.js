const CommonCompletedScanFactoryFilterKey = "CompletedScanFactory";
const CommonCompletionScanFilterKey = "CompletionScan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonCompletionScanFilterKey] === true &&
        element[CommonCompletedScanFactoryFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
