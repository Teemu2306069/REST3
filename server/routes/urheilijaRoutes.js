const express = require("express");

const urheilijaController = require("../controllers/urheilijaController");

const router = express.Router();

router
  .route("/")
  .get(urheilijaController.getAll)
  .post(urheilijaController.createNew);

router.route("/:id").get(urheilijaController.getById);

module.exports = router;
