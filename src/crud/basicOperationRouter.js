const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.status(200).send({
    message: "hi data server sucessfullly",
    data: 200,
  });
});

module.exports = router;
