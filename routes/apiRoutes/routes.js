const router = require('express').Router();
const { db } = require("../../db/db.json");
const fs = require("fs");

router.get("/db", (request, response) => {
  response.json(db);
});

module.exports = router;
