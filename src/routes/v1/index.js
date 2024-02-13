const express = require("express");

const { createTweet, getTweet } = require("../../controller/tweet-controller");
const { toggleLike } = require("../../controller/like-controller");
const { createComment } = require("../../controller/comment-controller");
const router = express.Router();
router.post("/tweets", createTweet);
router.post("/likes/toggle", toggleLike);
router.post("/comments", createComment);
router.get("/tweets/:id", getTweet);

module.exports = router;
