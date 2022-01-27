const { Comment } = require("../../../../models");

// const getAllCommentsForBlog = async (req, res) => {
//     const blogId = req.params.blogId
//     try {
//         let comments = Comment.findAll({
//             where: {
//                 blog_id = blogId
//             }
//         })
//         comments = commnets.map(comment => comment.get({ plain: true }));
//         return res.status(200).json({ comments });
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).json({ error: "Failed to fulfil request!" });
//     }
// }
// const getAllCommentsOfUser = async (req, res) => {
//     const blogId = req.params.blogId
//     try {
//         let comments = Comment.findAll({
//             where: {
//                 blog_id = blogId
//             }
//         })
//         comments = commnets.map(comment => comment.get({ plain: true }));
//         return res.status(200).json({ comments });
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).json({ error: "Failed to fulfil request!" });
//     }
// }
const addComment = async (req, res) => {
    try {
        const { comment, blog_id } = req.body;
        const user_id = req.session.user.id;
        const comment = {
            comment,
            blog_id,
            user_id
        }
        const response = await Comment.create(comment);
        return res.status(200).json({ message: response });
    } catch (e) {
        return res.status(500).json({ error: "Failed to fulfil request!" });
    }
}
const updateComment = async (req, res) => {
    try {
        const { comment, up_vote, down_vote } = req.body;
        const id = req.params.id;
        const comment = {
            comment,
            up_vote,
            down_vote,
            id
        }
        const response = await Comment.update(comment,
            {
                where: {
                    id
                }
            });
        return res.status(200).json({ message: response });
    } catch (e) {
        return res.status(500).json({ error: "Failed to fulfil request!" });
    }
}
const deleteComment = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Comment.destroy({
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
    addComment,
    updateComment,
    deleteComment,
}