const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleControllers");

router.get("/article", articleController.index);
router.post("/article/", articleController.store);
router.get("/article/:id", articleController.show);
router.patch("/article/update/:id", articleController.update);
router.delete("/article/delete/:id", articleController.destroy);

module.exports = router;
