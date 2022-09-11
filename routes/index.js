const express = require("express");
const passportService = require("../util/passport");
const admin = require("./auth");
const company = require("./company");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ success: true, title: "REST API Interface" });
});

router.use("/v01/admin", admin);
router.use("/v01/company", company);

module.exports = router;
