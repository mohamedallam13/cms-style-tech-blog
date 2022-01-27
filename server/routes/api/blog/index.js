const { Router } = require("express");
const {
    getAllBlogs,
    getOneBlog,
    getAllUserBlogs,
    addBlog,
    editBlog,
    deleteBlog
} = require("../../../controllers/api/blog");

const router = Router();

// Get All Blogs - GET request
router.get("/", getAllBlogs);

// Get a Blog - GET request
router.get("/:id", getOneBlog);

// Get All User Blogs - GET request
router.get("/:userId", getAllUserBlogs);


// Add Blog - POST request
router.post("/", addBlog);

// Edit Blog - PUT request
router.put("/:id", editBlog);

// Delete Blog - DELETE request
router.delete("/:id", deleteBlog);

module.exports = router;
