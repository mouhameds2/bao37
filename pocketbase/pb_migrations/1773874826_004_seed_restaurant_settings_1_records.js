/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("restaurant_settings");

  const record0 = new Record(collection);
    record0.set("businessName", "BAO Club");
    record0.set("phone", "+1-555-0123");
    record0.set("email", "info@baoclub.com");
    record0.set("address", "123 Tropical Avenue");
    record0.set("city", "Miami");
    record0.set("country", "USA");
    record0.set("currency", "USD");
    record0.set("taxRate", 0.08);
    record0.set("deliveryFee", 5);
    record0.set("minimumOrderAmount", 25);
    record0.set("openingHours", "{'monday': '11:00-23:00', 'tuesday': '11:00-23:00', 'wednesday': '11:00-23:00', 'thursday': '11:00-23:00', 'friday': '11:00-00:00', 'saturday': '11:00-00:00', 'sunday': '11:00-23:00'}");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})