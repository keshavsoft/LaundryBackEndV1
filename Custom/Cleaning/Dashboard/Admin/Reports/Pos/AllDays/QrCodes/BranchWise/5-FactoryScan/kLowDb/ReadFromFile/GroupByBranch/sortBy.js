let StartFunc = ({ inDataAsArray }) => {
    return inDataAsArray.sort((b, a) => b.QrCount - a.QrCount);
};

export { StartFunc };