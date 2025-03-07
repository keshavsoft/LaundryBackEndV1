const CommonCompletedScanFilterKey = "CompletedScanFactory";
const CommonCompletionScanFilterKey = "CompletionScan";

const StartFunc = ({ inQrcodeArray, inBranchName }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonCompletionScanFilterKey] === true &&
        element[CommonCompletedScanFilterKey] === false &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
