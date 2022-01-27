const { Blog, Comments } = require("../../../../models/Blog")

const renderBlogPage = (req, res) => {
    res.render("blog");
}

const renderCreateBlogPage = (req, res) => {
    res.render("createBlog");
}

const renderProfilePage = (req, res) => {
    res.render("profile");
}

module.exports = {
    renderBlogPage,
    renderCreateBlogPage,
    renderProfilePage
}