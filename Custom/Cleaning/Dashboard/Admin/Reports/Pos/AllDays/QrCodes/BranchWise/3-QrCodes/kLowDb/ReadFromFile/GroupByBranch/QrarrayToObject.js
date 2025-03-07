let StartFunc = ({ inDataAsArray }) => {
    const grouped = inDataAsArray.reduce((result, item) => {
        const key = item.BranchName;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});

    return grouped;
};

export { StartFunc };