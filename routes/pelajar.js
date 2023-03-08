const express = require("express");
const router = express.Router();

const pelajarController = require("../controllers/pelajar");

router.get("/", pelajarController.get);
router.get("/:np", pelajarController.detail);
router.post("/", pelajarController.post);
router.put("/", pelajarController.put);
router.delete("/:np", pelajarController.delete);

module.exports = router;
