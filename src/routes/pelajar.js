const express = require("express");
const router = express.Router();
const pelajarController = require("../controllers/pelajar");

router.route("/").get(pelajarController.get).post(pelajarController.post).put(pelajarController.put);
router.route("/:np").get(pelajarController.detail).delete(pelajarController.delete);

module.exports = router;
