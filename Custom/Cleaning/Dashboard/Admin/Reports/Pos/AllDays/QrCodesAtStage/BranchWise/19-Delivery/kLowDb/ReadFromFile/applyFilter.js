const CommonFilterKey = "F_F_Completion_Scan";
const CommonFilterKey2 = "To_Delivery_Scan";
const CommonFilterKey3 = "F_F_Entry_Return_Scan";
const CommonFilterKey4 = "F_F_Pressing_Return_Scan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonFilterKey] === true || element[CommonFilterKey3] === true ||element[CommonFilterKey4] === true && element[CommonFilterKey2] === false
    });

    return LocalFilteredArray;
};

export { StartFunc };
