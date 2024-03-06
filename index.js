const express = require ('express');
const bodyParser = require('body-parser');
const cors = require ('cors');

const server = express()


server.use(cors());
server.use(bodyParser.json());

server.post('/home',(req, res) => {
    console.log(req.body);
    res.json(req.body);
})

server.listen (8080,()=>{
    console.log('Server Started');
})