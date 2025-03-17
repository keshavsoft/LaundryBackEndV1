import { StartFunc as CommonAllOrders } from "./CommonAllOrders.js";

const StartFunc = () => CommonAllOrders().map(element => element.replace("BranOrders", ""));

export { StartFunc };
