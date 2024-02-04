const mongoos = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost/Twiiter_Dev");
};
module.exports = connect;
