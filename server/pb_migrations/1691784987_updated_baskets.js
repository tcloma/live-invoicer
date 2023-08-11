/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("93p38kc0lh0nds4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lvrohwqv",
    "name": "items",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "zehdht39wjn3qxi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("93p38kc0lh0nds4")

  // remove
  collection.schema.removeField("lvrohwqv")

  return dao.saveCollection(collection)
})
