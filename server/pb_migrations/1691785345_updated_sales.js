/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btxkie6tlaflurl")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_TQ8nb82` ON `sales` (`sale_date`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btxkie6tlaflurl")

  collection.indexes = []

  return dao.saveCollection(collection)
})
