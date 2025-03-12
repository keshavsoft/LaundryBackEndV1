import { StartFunc as CommonAllOrders } from "./CommonAllOrders.js";

const StartFunc = () => {
    const LocalAllOrders = CommonAllOrders();

    return LocalAllOrders.map(name => name.replace("BranOrders",""))
};

export { StartFunc };
