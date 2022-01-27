const { Router } = require("express");
const {
    renderBlogPage,
    renderCreateBlogPage,
    renderProfilePage
} = require("../../../controllers/views/privateController")

const router = Router();

router.get("/blog/:id", renderBlogPage);
router.get("/blog/new", renderCreateBlogPage);
router.get("/profile", renderProfilePage);

module.exports = router;