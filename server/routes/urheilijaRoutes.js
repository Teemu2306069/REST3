const express = require("express");
const urheilijaController = require("../controllers/urheilijaController");
const router = express.Router();

router
  .route("/")
  .get(urheilijaController.getAll)
  .post(urheilijaController.createNew);

router
  .route("/:id")
  .get(urheilijaController.getById)
  .delete(urheilijaController.deleteById)
  .put(urheilijaController.updateById);

module.exports = router;
