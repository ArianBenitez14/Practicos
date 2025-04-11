const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/", userController.index);
router.get("/user/create", userController.form);
router.post("/user/", userController.store);
router.get("/user/:id", userController.show);
router.patch("/user/update/:id", userController.update);
router.delete("/user/delete/:id", userController.destroy);

module.exports = router;
