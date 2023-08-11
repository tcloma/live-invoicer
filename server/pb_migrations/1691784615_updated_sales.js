/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btxkie6tlaflurl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h8fo8tse",
    "name": "baskets",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "93p38kc0lh0nds4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btxkie6tlaflurl")

  // remove
  collection.schema.removeField("h8fo8tse")

  return dao.saveCollection(collection)
})
