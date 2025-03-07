const CommonFilterKey = "BranchName";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalFilteredArray = inQrcodeArray.filter(element => {
        return element[CommonFilterKey] ;
    });

    return LocalFilteredArray;
};

export { StartFunc };
