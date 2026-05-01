/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Fetch related collections to get their IDs
  const categoriesCollection = app.findCollectionByNameOrId("categories");

  const collection = new Collection({
    "createRule": "@request.auth.role = 'admin'",
    "deleteRule": "@request.auth.role = 'admin'",
    "fields":     [
          {
                "autogeneratePattern": "[a-z0-9]{15}",
                "hidden": false,
                "id": "text4067758140",
                "max": 15,
                "min": 15,
                "name": "id",
                "pattern": "^[a-z0-9]+$",
                "presentable": false,
                "primaryKey": true,
                "required": true,
                "system": true,
                "type": "text"
          },
          {
                "hidden": false,
                "id": "relation5159315951",
                "name": "categoryId",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "relation",
                "cascadeDelete": false,
                "collectionId": categoriesCollection.id,
                "displayFields": [],
                "maxSelect": 1,
                "minSelect": 0
          },
          {
                "hidden": false,
                "id": "text8673850965",
                "name": "name",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "text8002354019",
                "name": "description",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "number8426297539",
                "name": "price",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "number",
                "max": null,
                "min": null,
                "onlyInt": false
          },
          {
                "hidden": false,
                "id": "file5874950943",
                "name": "image",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "file",
                "maxSelect": 1,
                "maxSize": 20971520,
                "mimeTypes": [],
                "thumbs": []
          },
          {
                "hidden": false,
                "id": "bool5015611260",
                "name": "isAvailable",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "bool"
          },
          {
                "hidden": false,
                "id": "number0180703867",
                "name": "preparationTime",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "number",
                "max": null,
                "min": null,
                "onlyInt": false
          },
          {
                "hidden": false,
                "id": "bool3548017796",
                "name": "isVegetarian",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "bool"
          },
          {
                "hidden": false,
                "id": "bool1142395680",
                "name": "isSpicy",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "bool"
          },
          {
                "hidden": false,
                "id": "number3073381867",
                "name": "displayOrder",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "number",
                "max": null,
                "min": null,
                "onlyInt": false
          },
          {
                "hidden": false,
                "id": "autodate9281588754",
                "name": "created",
                "onCreate": true,
                "onUpdate": false,
                "presentable": false,
                "system": false,
                "type": "autodate"
          },
          {
                "hidden": false,
                "id": "autodate5149559204",
                "name": "updated",
                "onCreate": true,
                "onUpdate": true,
                "presentable": false,
                "system": false,
                "type": "autodate"
          }
    ],
    "id": "pbc_7214915745",
    "indexes": [],
    "listRule": "",
    "name": "products",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.role = 'admin'",
    "viewRule": ""
  });

  try {
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("Collection name must be unique")) {
      console.log("Collection already exists, skipping");
      return;
    }
    throw e;
  }
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("pbc_7214915745");
    return app.delete(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})