/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
    let collection = new Collection({
        type: "auth",
        name: "profiles",
        listRule: "id = @request.auth.id || @request.auth.role = 'admin'",
        viewRule: "id = @request.auth.id || @request.auth.role = 'admin'",
        createRule: "",
        updateRule: "id = @request.auth.id || @request.auth.role = 'admin'",
        deleteRule: "@request.auth.role = 'admin'",
        fields: [
        {
                "hidden": false,
                "id": "text6039870712",
                "name": "name",
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
                "id": "text7926603790",
                "name": "phone",
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
                "id": "select7494598183",
                "name": "role",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "select",
                "maxSelect": 1,
                "values": [
                        "admin",
                        "manager",
                        "waiter",
                        "kitchen",
                        "cashier",
                        "customer"
                ]
        },
        {
                "hidden": false,
                "id": "file5074207759",
                "name": "avatar",
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
                "id": "number2060683123",
                "name": "loyaltyPoints",
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
                "id": "select3242749872",
                "name": "memberTier",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "select",
                "maxSelect": 1,
                "values": [
                        "bronze",
                        "silver",
                        "gold",
                        "platinum"
                ]
        }
],
    })

    try {
        app.save(collection)
    } catch (e) {
        if (e.message.includes("Collection name must be unique")) {
            console.log("Collection already exists, skipping")
            return
        }
        throw e
    }
}, (app) => {
    try {
        let collection = app.findCollectionByNameOrId("profiles")
        app.delete(collection)
    } catch (e) {
        if (e.message.includes("no rows in result set")) {
            console.log("Collection not found, skipping revert");
            return;
        }
        throw e;
    }
})