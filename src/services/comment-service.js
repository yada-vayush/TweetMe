const CommentRepository = require("../repository/comment-repository");
const TweetRepository = require("../repository/tweet-repository");
class CommentService {
  constructor() {
    this.commentrepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }
  async createComment(modelId, modelType, userId, content) {
    if (modelType == "Tweet") {
      var commentable = await this.tweetRepository.get(modelId);
    } else if (modelType == "Comment") {
      var commentable = await this.commentrepository.get(modelId);
    } else throw new Error("unknown model type");

    const comment = await this.commentrepository.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });
    commentable.comments.push(comment);
    await commentable.save();
    return comment;
  }
}

module.exports = CommentService;
