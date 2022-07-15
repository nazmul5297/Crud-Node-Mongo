const express = require("express");
const crudModule = require("./crud");

const app = express();
crudModule.init(app);

app.listen(3000, () => {
  console.log("Server Start at 3000");
});
