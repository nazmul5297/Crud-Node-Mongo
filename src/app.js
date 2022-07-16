const express = require("express");
const crudModule = require("./crud");
const database = require("./DBConnection/connection");
const db = new database();

const app = express();
crudModule.init(app);
db.connection();

app.listen(3000, () => {
  console.log("Server Start at 3000");
});
