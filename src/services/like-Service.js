const LikeRepository = require("../repository/like-repository");
const TweetRepository = require("../repository/tweet-repository");

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(
    modelId,
    modelType,
    id // /api/v1/like/toggle?id=modelId&type=Tweet
  ) {
    if (modelType == "Tweet") {
      var likeable = await this.tweetRepository.find(modelId);

      console.log(likeable);
    } else if ((modelType = "Comment")) {
    } else {
      throw new Error("unknown model type");
    }
    console.log("beyond");
    const exists = await this.likeRepository.findByUserLikeable({
      user: id,
      onModel: modelType,
      likeable: modelId,
    });
    console.log("exists", typeof exists);
    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      await exists.deleteOne();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: id,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}
module.exports = LikeService;
