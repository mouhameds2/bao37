/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("profiles");
  collection.listRule = "id = @request.auth.id || @request.auth.role = 'admin'";
  collection.viewRule = "id = @request.auth.id || @request.auth.role = 'admin'";
  collection.createRule = "";
  collection.updateRule = "id = @request.auth.id || @request.auth.role = 'admin'";
  collection.deleteRule = "@request.auth.role = 'admin'";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("profiles");
  collection.listRule = "id = @request.auth.id || @request.auth.role = 'admin'";
  collection.viewRule = "id = @request.auth.id || @request.auth.role = 'admin'";
  collection.createRule = "";
  collection.updateRule = "id = @request.auth.id || @request.auth.role = 'admin'";
  collection.deleteRule = "@request.auth.role = 'admin'";
  return app.save(collection);
})