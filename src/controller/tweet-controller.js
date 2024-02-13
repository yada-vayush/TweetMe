const TweetService = require("../services/tweet-service");
const tweetService = new TweetService();
const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Succesfully created a new tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Not able to  create a new tweet",
      data: {},
      err: error,
    });
  }
};
const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Succesfully fetched a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Not able to  fetch a tweet",
      data: {},
      err: error,
    });
  }
};

module.exports = {
  createTweet,
  getTweet,
};
