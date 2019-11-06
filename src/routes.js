const express = require("express");
const routes = express.Router();
const UsersController = require("./controllers/UserController");

routes.post("/user", UsersController.store);
routes.get("/user/:id", UsersController.index);
routes.get("/user", UsersController.list);
routes.delete("/user/:id", UsersController.destroy);   
routes.put("/user/:id", UsersController.uptade); 
module.exports = routes;