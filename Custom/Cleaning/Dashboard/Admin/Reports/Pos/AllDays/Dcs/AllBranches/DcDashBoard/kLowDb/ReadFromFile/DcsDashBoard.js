import { StartFunc as BranToFactDC } from '../../../../CommonFuncs/FromApi/BranToFactDC.js';

let StartFunc = () => {
    let inDataAsArray = BranToFactDC();
    const today = new Date().toISOString().split('T')[0];

    let grouped = inDataAsArray.reduce((result, item) => {
        let key = item.BranchName;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});

    let LocalReturnArray = [];
    let LocalTodayDcs = [];

    for (const [key, value] of Object.entries(grouped)) {
        if (key.startsWith("BranOrders")) continue;

        LocalReturnArray.push({
            BranchName: key,
            DcCount: value.length, 
        });

        const todayDcCount = value.filter(qr => 
            new Date(qr.DateTime).toISOString().split('T')[0] === today
        );

        LocalTodayDcs.push({
            BranchName: key,
            DcCount: todayDcCount.length,
        });
    }

    return { AllDcs: LocalReturnArray, TodayDcs: LocalTodayDcs };
};

export { StartFunc };
