const { Router } = require("express");
const { model } = require("mongoose");
const router = Router();

const { renderAbout, renderIndex } = require("../controllers/index.controller");

router.get("/", renderIndex);

router.get("/about", renderAbout);

module.exports = router;
