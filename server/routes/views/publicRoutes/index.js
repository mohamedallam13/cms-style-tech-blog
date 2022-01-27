const { Router } = require("express");
const {
    renderLoginPage,
    rendersignUpPage,
    renderHomePage,
} = require("../../../controllers/views/publicController")

const router = Router();

router.get("/login", renderLoginPage);
router.get("/signup", rendersignUpPage);
router.get("/", renderHomePage);

module.exports = router;
