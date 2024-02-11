const Like = require("../models/likes");
const CrudRepository = require("./crud-repository");

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
  async findByUserLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured in like repository");
      console.log("====================================");

      throw error;
    }
  }
}

module.exports = LikeRepository;
