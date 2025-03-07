const CommonFilterKey = "EntryRejectScan";
const CommonFilterFFEntryscan = "F_F_Entry_Return_Scan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonFilterKey] === true &&
        element[CommonFilterFFEntryscan] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
