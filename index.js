const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/CHM-Copy");
    console.log('DB Connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new mongoose.Schema({
    Email: String,
    Password : String
  });

  const User = mongoose.model('User', userSchema);


const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post("/home", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

server.listen(8080, () => {
  console.log("Server Started");
});
