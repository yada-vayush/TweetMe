const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepo = UserRepository();
  }
  async signUp(data) {
    const user = await this.userRepo.create(data);
    return user;
  }
}

module.exports = UserService;
