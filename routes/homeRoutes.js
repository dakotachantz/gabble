const express = require("express");
const homeRoutes = express.Router();

homeRoutes.get("/", (req, res) => {
  return res.render("home");
});

module.exports = homeRoutes;
