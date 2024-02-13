//const HashtagRepository = require("../repository/hashtag-repository.js");
const HashtagRepository = require("../repository/hashtag-repository");
const TweetRepository = require("../repository/tweet-repository");
class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }
  async create(data) {
    try {
      const content = data.content;
      let tags = content
        .match(/#[A-Za-z0-9_]+/g)
        .map((tag) => tag.substring(1))
        .map((tag) => tag.toLowerCase());

      const tweet = await this.tweetRepository.create(data);

      let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
      //console.log(alreadyPresentTags);
      let titlesOfalreadyPresentTags = alreadyPresentTags.map(
        (tag) => tag.title
      );

      let newTags = tags.filter(
        (tag) => !titlesOfalreadyPresentTags.includes(tag)
      );

      newTags = newTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });

      const response = await this.hashtagRepository.bulkCreate(newTags);
      alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });

      /**
       * 1. bulk create in mongoose
       * 2. filter the title of hasttag based on multiple tags
       * 3. how to add tweet id inside all the hashtags
       */
      return tweet;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured in tweet service layer");
      console.log("====================================");

      throw error;
    }
  }
  async get(id) {
    try {
      const tweet = await this.tweetRepository.getWithComments(id);
      return tweet;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured in tweet service layer");
      console.log("====================================");

      throw error;
    }
  }
}
module.exports = TweetService;
