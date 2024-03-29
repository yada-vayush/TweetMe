class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      // console.log("====================================");
      // console.log(data);
      // console.log("====================================");
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in Crud Repo");
      console.log("====================================");
      throw error;
    }
  }
  async destroy(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in Crud Repo");
      console.log("====================================");
      throw error;
    }
  }
  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in Crud Repo");
      console.log("====================================");
      throw error;
    }
  }
  async getAll() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in Crud Repo");
      console.log("====================================");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in Crud Repo");
      console.log("====================================");
      throw error;
    }
  }
}
module.exports = CrudRepository;
