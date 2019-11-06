const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server= express();

server.use(express.json());
 mongoose.connect("mongodb://localhost:27017/Cesta_Basica",
 {
     useNewUrlParser:true,
     useUnifiedTopology:true
 });
 mongoose.set("useCreateIndex", true);
 server.use(routes);
 server.listen(3333);

