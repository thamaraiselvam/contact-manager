const server = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./../config/config");

server.use("/", (req, res, next) => {
	let { protocal, host, port, name } = config.app.db;
	mongoose.connect(`${protocal}${host}:${port}/${name}`, { useNewUrlParser: true });
	next();
});

server.use(bodyParser.json());

module.exports = server;
