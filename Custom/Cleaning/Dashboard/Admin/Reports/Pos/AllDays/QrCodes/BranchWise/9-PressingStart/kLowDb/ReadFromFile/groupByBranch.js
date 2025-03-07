let StartFunc = ({ inDataAsArray }) => {
    const grouped = inDataAsArray.reduce((result, item) => {
        const key = item.BranchName;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});

    let LocalReturnArray = [];

    for (const [key, value] of Object.entries(grouped)) {
        const LoopInsideArray = value;
        const LoopInsideQrCodes = LoopInsideArray.map(element => {
            return element.QrCodeId
        });

        // console.log("LoopInside : ", value, LoopInside);

        LocalReturnArray.push({
            BranchName: key,
            QrCount: value.length,
            QrMax: LoopInsideQrCodes.reduce((a, b) => a > b ? a : b),
            QrMin: LoopInsideQrCodes.reduce((a, b) => a < b ? a : b)
        });
    };

    LocalReturnArray.sort((b, a) => b.QrCount - a.QrCount);

    return LocalReturnArray;
};

export { StartFunc };