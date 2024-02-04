const express = requie("express");
const connect = require("./config/database");

const app = express();

const PORT = 3002;
app.listen(PORT, async () => {
  console.log("Server Started");
  await connect();
  console.log("Mongo db connected");
});
