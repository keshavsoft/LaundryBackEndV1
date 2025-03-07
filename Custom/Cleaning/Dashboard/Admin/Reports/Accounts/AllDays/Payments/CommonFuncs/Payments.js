import { StartFunc as CommonAllOrders } from './CommonAllOrders.js';

let StartFunc = () => {
    let jVarLocalTransformedData = CommonAllOrders();
    const today = new Date().toISOString().split('T')[0];

    let AllDayOrdersArray = jVarLocalTransformedData.map(element => {
        let LastRecord = element.FileData.length;
        let LocalModifiedBranch = element.FileName.replace("BranOrders", "");

        return {
            Branch: LocalModifiedBranch,
            TotalOrderCount: LastRecord
        };
    });

    let TodayOrdersArray = jVarLocalTransformedData.map(element => {
        let LocalModifiedBranch = element.FileName.replace("BranOrders", "");
        let TodayOrdersCount = element.FileData.filter(order => new Date(order.OrderData.Currentdateandtime).toISOString().split('T')[0] === today);

        return {
            Branch: LocalModifiedBranch,
            TodayOrderCount: TodayOrdersCount.length
        };
    });

    return { TotalOrders: AllDayOrdersArray, TodayOrders: TodayOrdersArray };
};

export { StartFunc };
