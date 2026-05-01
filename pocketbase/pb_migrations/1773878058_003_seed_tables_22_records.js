/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("tables");

  const record0 = new Record(collection);
    record0.set("tableNumber", 1);
    record0.set("capacity", 2);
    const record0_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Main Dining'");
    if (!record0_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Main Dining'\""); }
    record0.set("zoneId", record0_zoneIdLookup.id);
    record0.set("isActive", true);
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("tableNumber", 2);
    record1.set("capacity", 4);
    const record1_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Main Dining'");
    if (!record1_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Main Dining'\""); }
    record1.set("zoneId", record1_zoneIdLookup.id);
    record1.set("isActive", true);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("tableNumber", 3);
    record2.set("capacity", 2);
    const record2_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Main Dining'");
    if (!record2_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Main Dining'\""); }
    record2.set("zoneId", record2_zoneIdLookup.id);
    record2.set("isActive", true);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("tableNumber", 4);
    record3.set("capacity", 4);
    const record3_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Main Dining'");
    if (!record3_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Main Dining'\""); }
    record3.set("zoneId", record3_zoneIdLookup.id);
    record3.set("isActive", true);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("tableNumber", 5);
    record4.set("capacity", 2);
    const record4_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Main Dining'");
    if (!record4_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Main Dining'\""); }
    record4.set("zoneId", record4_zoneIdLookup.id);
    record4.set("isActive", true);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("tableNumber", 6);
    record5.set("capacity", 4);
    const record5_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Main Dining'");
    if (!record5_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Main Dining'\""); }
    record5.set("zoneId", record5_zoneIdLookup.id);
    record5.set("isActive", true);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("tableNumber", 7);
    record6.set("capacity", 2);
    const record6_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Main Dining'");
    if (!record6_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Main Dining'\""); }
    record6.set("zoneId", record6_zoneIdLookup.id);
    record6.set("isActive", true);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("tableNumber", 8);
    record7.set("capacity", 4);
    const record7_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Main Dining'");
    if (!record7_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Main Dining'\""); }
    record7.set("zoneId", record7_zoneIdLookup.id);
    record7.set("isActive", true);
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("tableNumber", 9);
    record8.set("capacity", 2);
    const record8_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Terrace'");
    if (!record8_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Terrace'\""); }
    record8.set("zoneId", record8_zoneIdLookup.id);
    record8.set("isActive", true);
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("tableNumber", 10);
    record9.set("capacity", 4);
    const record9_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Terrace'");
    if (!record9_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Terrace'\""); }
    record9.set("zoneId", record9_zoneIdLookup.id);
    record9.set("isActive", true);
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("tableNumber", 11);
    record10.set("capacity", 2);
    const record10_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Terrace'");
    if (!record10_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Terrace'\""); }
    record10.set("zoneId", record10_zoneIdLookup.id);
    record10.set("isActive", true);
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("tableNumber", 12);
    record11.set("capacity", 4);
    const record11_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Terrace'");
    if (!record11_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Terrace'\""); }
    record11.set("zoneId", record11_zoneIdLookup.id);
    record11.set("isActive", true);
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("tableNumber", 13);
    record12.set("capacity", 2);
    const record12_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Terrace'");
    if (!record12_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Terrace'\""); }
    record12.set("zoneId", record12_zoneIdLookup.id);
    record12.set("isActive", true);
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("tableNumber", 14);
    record13.set("capacity", 4);
    const record13_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Terrace'");
    if (!record13_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Terrace'\""); }
    record13.set("zoneId", record13_zoneIdLookup.id);
    record13.set("isActive", true);
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("tableNumber", 15);
    record14.set("capacity", 4);
    const record14_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='VIP Lounge'");
    if (!record14_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='VIP Lounge'\""); }
    record14.set("zoneId", record14_zoneIdLookup.id);
    record14.set("isActive", true);
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("tableNumber", 16);
    record15.set("capacity", 6);
    const record15_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='VIP Lounge'");
    if (!record15_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='VIP Lounge'\""); }
    record15.set("zoneId", record15_zoneIdLookup.id);
    record15.set("isActive", true);
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("tableNumber", 17);
    record16.set("capacity", 4);
    const record16_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='VIP Lounge'");
    if (!record16_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='VIP Lounge'\""); }
    record16.set("zoneId", record16_zoneIdLookup.id);
    record16.set("isActive", true);
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("tableNumber", 18);
    record17.set("capacity", 6);
    const record17_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='VIP Lounge'");
    if (!record17_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='VIP Lounge'\""); }
    record17.set("zoneId", record17_zoneIdLookup.id);
    record17.set("isActive", true);
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("tableNumber", 19);
    record18.set("capacity", 2);
    const record18_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Garden'");
    if (!record18_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Garden'\""); }
    record18.set("zoneId", record18_zoneIdLookup.id);
    record18.set("isActive", true);
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("tableNumber", 20);
    record19.set("capacity", 4);
    const record19_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Garden'");
    if (!record19_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Garden'\""); }
    record19.set("zoneId", record19_zoneIdLookup.id);
    record19.set("isActive", true);
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("tableNumber", 21);
    record20.set("capacity", 2);
    const record20_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Garden'");
    if (!record20_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Garden'\""); }
    record20.set("zoneId", record20_zoneIdLookup.id);
    record20.set("isActive", true);
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("tableNumber", 22);
    record21.set("capacity", 4);
    const record21_zoneIdLookup = app.findFirstRecordByFilter("zones", "name='Garden'");
    if (!record21_zoneIdLookup) { throw new Error("Lookup failed for zoneId: no record in 'zones' matching \"name='Garden'\""); }
    record21.set("zoneId", record21_zoneIdLookup.id);
    record21.set("isActive", true);
  try {
    app.save(record21);
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