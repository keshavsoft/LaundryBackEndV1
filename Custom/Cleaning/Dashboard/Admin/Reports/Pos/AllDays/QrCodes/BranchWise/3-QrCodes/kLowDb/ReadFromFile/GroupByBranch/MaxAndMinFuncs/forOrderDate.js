let StartFunc = ({ inDataAsArray }) => {
    const LoopInsideOrderDateTime = inDataAsArray.map(element => {
        return element.OrderDateTime
    });
    
    const LocalMaxValue = LoopInsideOrderDateTime.reduce((a, b) => a > b ? a : b);

    return {
        OrderDateMax: LocalMaxValue,
        OrderDateMin: LoopInsideOrderDateTime.reduce((a, b) => a < b ? a : b),
        OrderDateMaxTimeSpan: TimeSpan({ DateTime: LocalMaxValue })
    };
};

const TimeSpan = ({ DateTime }) => {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
};


export { StartFunc };