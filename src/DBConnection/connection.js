var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
// var url = "mongodb://localhost:27017/mydb";
const config = require("../../config.json");
const databaseConfig = config.database;

module.exports = class db {
  constructor() {}
  async connection() {
    MongoClient.connect(databaseConfig.url, function (err, db) {
      if (err) throw err;
      console.log("database Connected");
      // var dbo = db.db("mydb");
      // var myobj = [
      //   { name: "John", address: "Highway 71" },
      //   { name: "Peter", address: "Lowstreet 4" },
      //   { name: "Amy", address: "Apple st 652" },
      //   { name: "Hannah", address: "Mountain 21" },
      //   { name: "Michael", address: "Valley 345" },
      //   { name: "Sandy", address: "Ocean blvd 2" },
      //   { name: "Betty", address: "Green Grass 1" },
      //   { name: "Richard", address: "Sky st 331" },
      //   { name: "Susan", address: "One way 98" },
      //   { name: "Vicky", address: "Yellow Garden 2" },
      //   { name: "Ben", address: "Park Lane 38" },
      //   { name: "William", address: "Central st 954" },
      //   { name: "Chuck", address: "Main Road 989" },
      //   { name: "Viola", address: "Sideway 1633" },
      // ];
      // dbo.collection("customers").insertMany(myobj, function (err, res) {
      //   if (err) throw err;
      //   console.log("Number of documents inserted: " + res.insertedCount);
      //   db.close();
      // });
    });
  }
};
