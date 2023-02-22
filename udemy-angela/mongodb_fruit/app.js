const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "fruitsDB";

const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect((err) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // insertDocuments(db, () => {
  //   client.close();
  // });

	findDocuments(db, () => {
		client.close();
	});

});

const insertDocuments = (db, callback) => {
  const collection = db.collection("fruits");

  collection.insertMany(
    [
      { name: "Apple", score: 8, review: "Great fruit" },
      { name: "Orange", score: 6, review: "Kinda sour" },
      { name: "Banana", score: 9, review: "Great stuff!" },
    ],
    (err, result) => {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    }
  );
};

const findDocuments = (db, callback) => {
  const collection = db.collection("fruits");

  collection.find({}).toArray((err, fruits) => {
		assert.equal(err, null);
		console.log("Found the following records");
		console.log(fruits);
		callback(fruits);
	});
};
