require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const server = express();
const port = process.env.PORT || 5000;

const alphabetRoute = require("./route/AlphabetRoute")

server.use(logger('dev'));
server.use(express.json());
server.use(
    express.urlencoded({
        extended: false,
    })
);

server.use(cors())

server.use("/digital/castellum/api", alphabetRoute)

server.all("*", (req, res) => {
    res.status(404).json({
        statusText: "Not found",
        message: "URL not found",
    });
});

server.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
});