const express = require("express");
const { inicio, teste } = require("../controle/index");

const router = express.Router();

router.get("/", inicio);
router.get("/teste", teste);

module.exports = router;