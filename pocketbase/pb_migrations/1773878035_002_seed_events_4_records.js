/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("events");

  const record0 = new Record(collection);
    record0.set("title", "Tropical Night Party");
    record0.set("eventDate", "2026-04-15");
    record0.set("eventTime", "19:00");
    record0.set("description", "Experience the magic of tropical nights with live music and signature cocktails");
    record0.set("status", "upcoming");
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
    record1.set("title", "Jazz Evening");
    record1.set("eventDate", "2026-04-22");
    record1.set("eventTime", "20:00");
    record1.set("description", "Smooth jazz performances with premium dining experience");
    record1.set("status", "upcoming");
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
    record2.set("title", "Sunset Brunch");
    record2.set("eventDate", "2026-04-29");
    record2.set("eventTime", "11:00");
    record2.set("description", "Elegant brunch with garden views and champagne");
    record2.set("status", "upcoming");
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
    record3.set("title", "VIP Gala");
    record3.set("eventDate", "2026-05-10");
    record3.set("eventTime", "19:30");
    record3.set("description", "Exclusive evening for our most valued guests");
    record3.set("status", "upcoming");
  try {
    app.save(record3);
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