const User = require("../models/user");
const CrudRepository = require("./crud-repository");

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
  async findBy(data) {
    try {
      const response = await User.findOne({ email: data });

      return response;
    } catch (error) {
      console.log("Error occured in user repo");
      throw error;
    }
  }
}

module.exports = UserRepository;
