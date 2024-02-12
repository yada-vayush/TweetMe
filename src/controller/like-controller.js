const LikeService = require("../services/like-Service");
const likeService = new LikeService();
const toggleLike = async (req, res) => {
  try {
    console.log(req.query);
    console.log(req.body);
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.id
    );
    return res.status(200).json({
      success: true,
      message: "Succesfully toggled the like",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      success: false,
      message: "Not able to  toggle the like",
      data: {},
      err: error,
    });
  }
};
module.exports = {
  toggleLike,
};
