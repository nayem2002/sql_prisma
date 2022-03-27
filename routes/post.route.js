const express = require("express");
const {
  getAllPost,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controller/post.controller");

const router = express.Router();

router.route("/post").get(getAllPost);
router.route("/post/new").post(createPost);
router.route("/post/:id").get(getSinglePost).put(updatePost).delete(deletePost);

module.exports = router;
