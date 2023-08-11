/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "93p38kc0lh0nds4",
    "created": "2023-08-11 20:09:38.339Z",
    "updated": "2023-08-11 20:09:38.339Z",
    "name": "baskets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wr2ihlsw",
        "name": "ig_handle",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("93p38kc0lh0nds4");

  return dao.deleteCollection(collection);
})
