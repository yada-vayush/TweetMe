const { HashTag } = require("../models/index");

class HashtagRepository {
  async create(data) {
    try {
      const tag = await HashTag.create(data);
      return tag;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured in tweet repository");
      console.log("====================================");
      throw error;
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await HashTag.insertMany(data);

      return tags;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured in tweet repository");
      console.log("====================================");
      throw error;
    }
  }
  async get(id) {
    try {
      const tag = await HashTag.findById(id);
      return tag;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured in tweet repository");
      console.log("====================================");
      throw error;
    }
  }
  //   async getAll(offset, limit) {
  //     try {
  //       const tweet = await HashTag.find().skip(offset).limit(limit);
  //       return tweet;
  //     } catch (error) {
  //       console.log("====================================");
  //       console.log("Error occured in tweet repository");
  //       console.log("====================================");
  //       throw error;
  //     }
  //   }
  // async getWithComments(id) {
  //   try {
  //     const tweet = await HashTag.findById(id)
  //       .populate({ path: "comments" })
  //       .lean();
  //     return tweet;
  //   } catch (error) {
  //     console.log("====================================");
  //     console.log("Error occured in tweet repository");
  //     console.log("====================================");
  //     throw error;
  //   }
  // }
  async delete(id) {
    try {
      const response = await HashTag.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured in tweet repository");
      console.log("====================================");
      throw error;
    }
  }
  // async update(id, data) {
  //   try {
  //     const tweet = await HashTag.findByIdAndUpdate(id, data, { new: true });
  //     return tweet;
  //   } catch (error) {
  //     console.log("====================================");
  //     console.log("Error occured in tweet repository");
  //     console.log("====================================");
  //     throw error;
  //   }
  // }
  async findByName(data) {
    try {
      const tags = await HashTag.find({
        title: data,
      });
      return tags;
    } catch (error) {
      console.log("Error occured in the tweet repository");
      throw error;
    }
  }
}

module.exports = HashtagRepository;
