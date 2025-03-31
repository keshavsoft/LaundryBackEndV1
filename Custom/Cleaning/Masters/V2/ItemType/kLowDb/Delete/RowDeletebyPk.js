import { StartFunc as MastersItems } from '../CommonFuncs/MastersItemTypes.js';

let StartFunc = async ({ inId }) => {
  let LocalId = parseInt(inId);

  let LocalMastersItemsData = MastersItems();
  let db = LocalMastersItemsData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.pk === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  };

  let LocalArrayAfterDelete = deleteObjectById({
    inCollection: LocalarrayOfObjects,
    inId: LocalId,
  });

  db.data = LocalArrayAfterDelete;
  db.write();

  return await true;
};

let deleteObjectById = ({ inCollection, inId }) => {
  let LocalCollection = inCollection;
  let LocalId = inId;

  LocalCollection.splice(
    LocalCollection.findIndex((a) => a.pk === LocalId),
    1
  );

  return LocalCollection;
};

export { StartFunc };
