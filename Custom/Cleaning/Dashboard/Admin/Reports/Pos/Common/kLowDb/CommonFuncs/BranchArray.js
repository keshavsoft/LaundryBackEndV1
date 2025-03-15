import { StartFunc as CommonAllOrders } from "./CommonAllOrders.js";

const StartFunc = () => {
    const LocalAllOrders = CommonAllOrders();
    let localBranchNames = LocalAllOrders.forEach(element => {
        return element.replace("BranOrders", "")
    });

    return localBranchNames
};

export { StartFunc };
