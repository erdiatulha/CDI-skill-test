const alphabetRoute = require("express").Router();
const alphabetController = require("../controller/AlphabetController")

alphabetRoute.post("/alphabet/sort", alphabetController.alphabetSort);


module.exports = alphabetRoute;