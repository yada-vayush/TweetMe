const CommentService = require("../services/comment-service");
const commentService = new CommentService();
const createComment = async (req, res) => {
  try {
    console.log(req.query);
    console.log(req.body);
    const response = await commentService.createComment(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    return res.status(200).json({
      success: true,
      message: "Succesfully created new comment",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      success: false,
      message: "Not able to  create new commebt",
      data: {},
      err: error,
    });
  }
};
module.exports = {
  createComment,
};
