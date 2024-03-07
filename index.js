const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/CHM-Copy");
  console.log("DB Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const server = express();

server.use(cors(
   { credentials:true}
));
server.use(bodyParser.json({limit:"200mb"}));
server.use(bodyParser.urlencoded({limit:"200mb",extended:true,parameterLimit:1000000}));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);



server.post("/home", async (req, res) => {
    console.log('hearhhhhhh')
    try {
        let user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
      
        const doc = await user.save();
        console.log('doc',doc);
       return res.status(200).json(doc);
    } catch (error) {
        console.log('errr',error)
    }

});

server.listen(8080, () => {
  console.log("Server Started");
});
