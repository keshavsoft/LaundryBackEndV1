let StartFunc = ({ inDataAsArray }) => {
    const LoopInsideQrCodes = inDataAsArray.map(element => {
        return element.QrCodeId
    });

    return {
        QrMax: LoopInsideQrCodes.reduce((a, b) => a > b ? a : b),
        QrMin: LoopInsideQrCodes.reduce((a, b) => a < b ? a : b)
    };
};

export { StartFunc };