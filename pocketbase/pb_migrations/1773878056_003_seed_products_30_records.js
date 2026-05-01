/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  const record0 = new Record(collection);
    record0.set("name", "Spring Rolls");
    record0.set("description", "Crispy spring rolls with sweet and sour sauce");
    record0.set("price", 8);
    const record0_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Appetizers'");
    if (!record0_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Appetizers'\""); }
    record0.set("categoryId", record0_categoryIdLookup.id);
    record0.set("isAvailable", true);
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
    record1.set("name", "Dumplings");
    record1.set("description", "Steamed pork and vegetable dumplings");
    record1.set("price", 9);
    const record1_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Appetizers'");
    if (!record1_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Appetizers'\""); }
    record1.set("categoryId", record1_categoryIdLookup.id);
    record1.set("isAvailable", true);
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
    record2.set("name", "Satay Skewers");
    record2.set("description", "Grilled chicken satay with peanut sauce");
    record2.set("price", 10);
    const record2_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Appetizers'");
    if (!record2_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Appetizers'\""); }
    record2.set("categoryId", record2_categoryIdLookup.id);
    record2.set("isAvailable", true);
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
    record3.set("name", "Shrimp Toast");
    record3.set("description", "Crispy shrimp toast with sesame seeds");
    record3.set("price", 11);
    const record3_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Appetizers'");
    if (!record3_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Appetizers'\""); }
    record3.set("categoryId", record3_categoryIdLookup.id);
    record3.set("isAvailable", true);
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
    record4.set("name", "Edamame");
    record4.set("description", "Steamed edamame with sea salt");
    record4.set("price", 7);
    const record4_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Appetizers'");
    if (!record4_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Appetizers'\""); }
    record4.set("categoryId", record4_categoryIdLookup.id);
    record4.set("isAvailable", true);
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
    record5.set("name", "Crispy Calamari");
    record5.set("description", "Fried calamari with lemon aioli");
    record5.set("price", 12);
    const record5_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Appetizers'");
    if (!record5_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Appetizers'\""); }
    record5.set("categoryId", record5_categoryIdLookup.id);
    record5.set("isAvailable", true);
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
    record6.set("name", "Pad Thai");
    record6.set("description", "Stir-fried rice noodles with shrimp and peanuts");
    record6.set("price", 15);
    const record6_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Main Courses'");
    if (!record6_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Main Courses'\""); }
    record6.set("categoryId", record6_categoryIdLookup.id);
    record6.set("isAvailable", true);
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
    record7.set("name", "Green Curry");
    record7.set("description", "Spicy green curry with chicken and basil");
    record7.set("price", 16);
    const record7_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Main Courses'");
    if (!record7_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Main Courses'\""); }
    record7.set("categoryId", record7_categoryIdLookup.id);
    record7.set("isAvailable", true);
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
    record8.set("name", "Grilled Fish");
    record8.set("description", "Fresh grilled fish with herbs and lemon");
    record8.set("price", 22);
    const record8_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Main Courses'");
    if (!record8_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Main Courses'\""); }
    record8.set("categoryId", record8_categoryIdLookup.id);
    record8.set("isAvailable", true);
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
    record9.set("name", "Duck Confit");
    record9.set("description", "Tender duck confit with cherry sauce");
    record9.set("price", 28);
    const record9_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Main Courses'");
    if (!record9_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Main Courses'\""); }
    record9.set("categoryId", record9_categoryIdLookup.id);
    record9.set("isAvailable", true);
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
    record10.set("name", "Beef Tenderloin");
    record10.set("description", "Prime beef tenderloin with truffle sauce");
    record10.set("price", 35);
    const record10_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Main Courses'");
    if (!record10_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Main Courses'\""); }
    record10.set("categoryId", record10_categoryIdLookup.id);
    record10.set("isAvailable", true);
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
    record11.set("name", "Lobster Tail");
    record11.set("description", "Grilled lobster tail with garlic butter");
    record11.set("price", 45);
    const record11_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Main Courses'");
    if (!record11_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Main Courses'\""); }
    record11.set("categoryId", record11_categoryIdLookup.id);
    record11.set("isAvailable", true);
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
    record12.set("name", "Mango Sticky Rice");
    record12.set("description", "Sweet mango with sticky rice and coconut cream");
    record12.set("price", 9);
    const record12_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Desserts'");
    if (!record12_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Desserts'\""); }
    record12.set("categoryId", record12_categoryIdLookup.id);
    record12.set("isAvailable", true);
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
    record13.set("name", "Chocolate Lava Cake");
    record13.set("description", "Warm chocolate cake with molten center");
    record13.set("price", 10);
    const record13_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Desserts'");
    if (!record13_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Desserts'\""); }
    record13.set("categoryId", record13_categoryIdLookup.id);
    record13.set("isAvailable", true);
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
    record14.set("name", "Panna Cotta");
    record14.set("description", "Silky panna cotta with berry compote");
    record14.set("price", 9);
    const record14_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Desserts'");
    if (!record14_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Desserts'\""); }
    record14.set("categoryId", record14_categoryIdLookup.id);
    record14.set("isAvailable", true);
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
    record15.set("name", "Cr\u00e8me Br\u00fbl\u00e9e");
    record15.set("description", "Classic cr\u00e8me br\u00fbl\u00e9e with caramelized sugar");
    record15.set("price", 10);
    const record15_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Desserts'");
    if (!record15_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Desserts'\""); }
    record15.set("categoryId", record15_categoryIdLookup.id);
    record15.set("isAvailable", true);
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
    record16.set("name", "Coconut Panna Cotta");
    record16.set("description", "Creamy coconut panna cotta with mango");
    record16.set("price", 10);
    const record16_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Desserts'");
    if (!record16_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Desserts'\""); }
    record16.set("categoryId", record16_categoryIdLookup.id);
    record16.set("isAvailable", true);
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
    record17.set("name", "Passion Fruit Tart");
    record17.set("description", "Tart with passion fruit curd and meringue");
    record17.set("price", 11);
    const record17_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Desserts'");
    if (!record17_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Desserts'\""); }
    record17.set("categoryId", record17_categoryIdLookup.id);
    record17.set("isAvailable", true);
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
    record18.set("name", "Thai Iced Tea");
    record18.set("description", "Sweet and creamy Thai iced tea");
    record18.set("price", 5);
    const record18_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Beverages'");
    if (!record18_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Beverages'\""); }
    record18.set("categoryId", record18_categoryIdLookup.id);
    record18.set("isAvailable", true);
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
    record19.set("name", "Fresh Lemonade");
    record19.set("description", "Freshly squeezed lemonade with mint");
    record19.set("price", 6);
    const record19_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Beverages'");
    if (!record19_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Beverages'\""); }
    record19.set("categoryId", record19_categoryIdLookup.id);
    record19.set("isAvailable", true);
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
    record20.set("name", "Mango Juice");
    record20.set("description", "Fresh mango juice");
    record20.set("price", 6);
    const record20_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Beverages'");
    if (!record20_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Beverages'\""); }
    record20.set("categoryId", record20_categoryIdLookup.id);
    record20.set("isAvailable", true);
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
    record21.set("name", "Coconut Water");
    record21.set("description", "Fresh coconut water");
    record21.set("price", 5);
    const record21_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Beverages'");
    if (!record21_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Beverages'\""); }
    record21.set("categoryId", record21_categoryIdLookup.id);
    record21.set("isAvailable", true);
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("name", "Sparkling Water");
    record22.set("description", "Sparkling water with lime");
    record22.set("price", 4);
    const record22_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Beverages'");
    if (!record22_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Beverages'\""); }
    record22.set("categoryId", record22_categoryIdLookup.id);
    record22.set("isAvailable", true);
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("name", "Iced Coffee");
    record23.set("description", "Cold brew iced coffee");
    record23.set("price", 5);
    const record23_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Beverages'");
    if (!record23_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Beverages'\""); }
    record23.set("categoryId", record23_categoryIdLookup.id);
    record23.set("isAvailable", true);
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.set("name", "Tropical Punch");
    record24.set("description", "Tropical fruit punch with rum");
    record24.set("price", 12);
    const record24_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Cocktails'");
    if (!record24_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Cocktails'\""); }
    record24.set("categoryId", record24_categoryIdLookup.id);
    record24.set("isAvailable", true);
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.set("name", "Mojito");
    record25.set("description", "Classic mojito with fresh mint");
    record25.set("price", 11);
    const record25_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Cocktails'");
    if (!record25_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Cocktails'\""); }
    record25.set("categoryId", record25_categoryIdLookup.id);
    record25.set("isAvailable", true);
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.set("name", "Mai Tai");
    record26.set("description", "Traditional mai tai with rum and lime");
    record26.set("price", 13);
    const record26_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Cocktails'");
    if (!record26_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Cocktails'\""); }
    record26.set("categoryId", record26_categoryIdLookup.id);
    record26.set("isAvailable", true);
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.set("name", "Pina Colada");
    record27.set("description", "Creamy pina colada with coconut rum");
    record27.set("price", 12);
    const record27_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Cocktails'");
    if (!record27_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Cocktails'\""); }
    record27.set("categoryId", record27_categoryIdLookup.id);
    record27.set("isAvailable", true);
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.set("name", "Margarita");
    record28.set("description", "Classic margarita with tequila");
    record28.set("price", 11);
    const record28_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Cocktails'");
    if (!record28_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Cocktails'\""); }
    record28.set("categoryId", record28_categoryIdLookup.id);
    record28.set("isAvailable", true);
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.set("name", "Old Fashioned");
    record29.set("description", "Classic old fashioned with bourbon");
    record29.set("price", 13);
    const record29_categoryIdLookup = app.findFirstRecordByFilter("categories", "name='Cocktails'");
    if (!record29_categoryIdLookup) { throw new Error("Lookup failed for categoryId: no record in 'categories' matching \"name='Cocktails'\""); }
    record29.set("categoryId", record29_categoryIdLookup.id);
    record29.set("isAvailable", true);
  try {
    app.save(record29);
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