var express = require("express");
var router = express.Router();

let MainController = require("../controller/index");

router.get("/", MainController.home);
router.get("/index", MainController.home);
router.get("/about", MainController.about);
router.get("/project", MainController.project);
router.get("/service", MainController.service);
router.get("/contact", MainController.contact);

module.exports = router;
