const { Router } = require("express");

const privateRoutes = require("./privateRoutes");
const publicRoutes = require("./publicRoutes");

const router = Router();

router.use(privateRoutes);
router.use(publicRoutes);

module.exports = router;

