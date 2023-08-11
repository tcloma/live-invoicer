/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("93p38kc0lh0nds4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcqvnjzg",
    "name": "sale",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "btxkie6tlaflurl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("93p38kc0lh0nds4")

  // remove
  collection.schema.removeField("fcqvnjzg")

  return dao.saveCollection(collection)
})
