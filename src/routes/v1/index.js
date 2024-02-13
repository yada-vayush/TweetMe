const express = require("express");

const { createTweet, getTweet } = require("../../controller/tweet-controller");
const { toggleLike } = require("../../controller/like-controller");
const { createComment } = require("../../controller/comment-controller");
const { signup, login } = require("../../controller/auth-controller");
const authenticate = require("../../middleware/authenticate");
const router = express.Router();
router.post("/tweets", authenticate, createTweet);
router.post("/likes/toggle", toggleLike);
router.post("/comments", createComment);
router.get("/tweets/:id", getTweet);
router.post("/signup", signup);
router.post("/login", login);
module.exports = router;
