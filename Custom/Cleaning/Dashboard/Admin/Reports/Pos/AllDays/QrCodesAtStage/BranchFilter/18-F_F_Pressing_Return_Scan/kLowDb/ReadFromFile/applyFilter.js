const CommonFilterKey = "PressingRejectScan";
const CommonFilterF_F_PressingReturnKey = "F_F_Pressing_Return_Scan";

const StartFunc = ({ inQrcodeArray, inBranchName }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonFilterKey] === true &&
        element[CommonFilterF_F_PressingReturnKey] === false &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
