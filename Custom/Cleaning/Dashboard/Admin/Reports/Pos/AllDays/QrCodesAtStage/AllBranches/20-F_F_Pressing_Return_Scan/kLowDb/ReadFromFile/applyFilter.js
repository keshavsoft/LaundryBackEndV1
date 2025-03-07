const CommonFilterKey = "PressingRejectScan";
const CommonFilterF_F_PressingReturnKey = "F_F_Pressing_Return_Scan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalFilteredArray = inQrcodeArray.filter(element => {
        return element[CommonFilterKey] === true && 
        element[CommonFilterF_F_PressingReturnKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
