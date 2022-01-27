const { Router } = require("express");
const {
    addComment,
    updateComment,
    deleteComment,
} = require("../../../controllers/api/comment");

const router = Router();

// Add Comment - POST request
router.post("/", addComment);

// Edit Comment - PUT request
router.put("/:id", updateComment);

// Delete Comment - DELETE request
router.delete("/:id", deleteComment);

module.exports = router;
