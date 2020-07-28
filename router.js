const express = require("express");
const router = express.Router();

const userController = require("./controllers/user");

router.get("/", userController.home);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/upload-img", userController.uploadImg);

module.exports = router;
