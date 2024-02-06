const express = require("express");
const connect = require("./config/database");
//const { HashtagRepository, TweetRepository } = require("./repository/index");
const TweetRepository = require("./repository/tweet-repository");
const TweetService = require("./services/tweet-service");

const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
const PORT = 3002;
app.listen(PORT, async () => {
  console.log("Server Started");
  await connect();
  console.log("Mongo db connected");
  // let repo = new TweetRepository();

  // const service = new TweetService();
  // const tweet = await service.create({
  //   content: "#India is   #WINNINGIt ",
  // });
  // console.log(tweet);
});
