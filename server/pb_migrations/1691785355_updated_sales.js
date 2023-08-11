/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btxkie6tlaflurl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yewmubcu",
    "name": "sale_date",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btxkie6tlaflurl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yewmubcu",
    "name": "sale_date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
