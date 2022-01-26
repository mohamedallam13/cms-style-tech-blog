const { Router } = require("express");
const auth = require("")

const privateRoutes = require("./privateRoutes");
const publicRoutes = require("./publicRoutes");
const auth = require("../../auth");

const router = Router();

router.use(publicRoutes);
router.use(auth, privateRoutes);

module.exports = router;

