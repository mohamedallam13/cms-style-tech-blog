const { Blog } = require("../../../../models");

const getAllBlogs = async (req, res) => { }
const getOneBlog = async (req, res) => { }
const getAllUserBlogs = async (req, res) => { }
const addBlog = async (req, res) => {
    try {
        const { title, post } = req.body;
        const user_id = req.session.user.id;
        const blog = {
            title,
            post,
            user_id
        }
        const response = await Blog.create(blog);
        return res.status(200).json({ message: response });
    } catch (e) {
        return res.status(500).json({ error: "Failed to fulfil request!" });
    }
}
const editBlog = async (req, res) => {
    try {
        const { title, post } = req.body;
        const id = req.params.id;
        const comment = {
            title,
            post,
            id
        }
        const response = await Blog.update(comment,
            {
                where: {
                    id
                }
            });
        return res.status(200).json({ message: response, isEdited: true });
    } catch (e) {
        return res.status(500).json({ error: "Failed to fulfil request!" });
    }
}
const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Blog.destroy({
            where: {
                id
            }
        });
        return res.status(200).json({ message: response });
    } catch (e) {
        return res.status(500).json({ error: "Failed to fulfil request!" });
    }
}

module.exports = {
    getAllBlogs,
    getOneBlog,
    getAllUserBlogs,
    addBlog,
    editBlog,
    deleteBlog
}

