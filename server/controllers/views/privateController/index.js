const { User, Blog, Comment } = require("../../../../models")

const renderBlogPage = async (req, res) => {
    const blog_id = req.params.id;
    let blog = await Blog.findByPk(blog_id, {
        include: [
            { model: User },
            { model: Comment }
        ]
    })
    blog = blog.get({ plain: true });
    res.render("blog");
}

const renderCreateBlogPage = (req, res) => {
    res.render("createBlog");
}

const renderEditBlogPage = (req, res) => {
    const blog_id = req.params.id;
    let blog = await Blog.findByPk(blog_id);
    blog = blog.get({ plain: true });
    res.render("createBlog", blog);
}

const renderProfilePage = (req, res) => {
    const user_id = req.session.user.id;
    const user = await User.findByPk(user_id);
    res.render("profile", user);
}

module.exports = {
    renderBlogPage,
    renderCreateBlogPage,
    renderEditBlogPage,
    renderProfilePage
}