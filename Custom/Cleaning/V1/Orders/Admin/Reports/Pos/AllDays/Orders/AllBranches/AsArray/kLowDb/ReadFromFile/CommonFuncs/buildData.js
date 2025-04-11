import { StartFunc as orders } from './OrdersFuncs/EntryFile.js';

let StartFunc = () => {
    const LocalOrdersArray = orders();

    return LocalOrdersArray;
};

export { StartFunc };
