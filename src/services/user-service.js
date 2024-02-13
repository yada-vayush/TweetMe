const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepo = new UserRepository();
  }
  async signUp(data) {
    try {
      const user = await this.userRepo.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
