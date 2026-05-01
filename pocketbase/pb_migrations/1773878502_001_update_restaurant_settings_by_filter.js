/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("restaurant_settings", "id != ''");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("businessName", "BAO Club");
    record.set("address", "Tours, France");
    record.set("email", "contact@bao37.fr");
    record.set("phone", "+33 2 47 XX XX XX");
    record.set("city", "Tours");
    record.set("country", "France");
    record.set("latitude", 47.3895);
    record.set("longitude", 0.6848);
    try {
      app.save(record);
    } catch (e) {
      if (e.message.includes("Value must be unique")) {
        console.log("Record with unique value already exists, skipping");
      } else {
        throw e;
      }
    }
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})