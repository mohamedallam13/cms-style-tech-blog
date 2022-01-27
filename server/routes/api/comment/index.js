const { Router } = require("express");
const {
    getAllCommentsForBlog,
    getAllCommentsOfUser,
    addComment,
    editComment,
    deleteComment,
    addUpVote,
    addDownVote,
} = require("../../../controllers/api/comment");

const router = Router();

// Get All Blog Comments - GET request
router.get("/:blogId", getAllCommentsForBlog);

// Get All User Comments - GET request
router.get("/:userId", getAllCommentsOfUser);

// Add Comment - POST request
router.post("/", addComment);

// Upvote Comment - GET request
router.post("/up/:id", addUpVote);

// Downvote Comment - Sign Up - POST request
router.post("/down/:id", addDownVote);

// Edit Comment - PUT request
router.put("/:id", editComment);

// Delete Comment - DELETE request
router.delete("/:id", deleteComment);

module.exports = router;
