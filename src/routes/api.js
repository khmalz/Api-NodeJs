const express = require("express");
const router = express.Router();
const pelajarRoutes = require("./pelajar");

router.use("/pelajar", pelajarRoutes);

module.exports = router;
