const server = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./../config/config");
const userController = require('./../controller/user');

server.use("/", (req, res, next) => {
	let { protocal, host, port, name } = config.app.db;
	mongoose.connect(`${protocal}${host}:${port}/${name}`, { useNewUrlParser: true });
	next();
});

server.use(['/contact'], async (req, res, next) => {
	if(!req.headers.authorization){
		return res.send({
			status: 'error',
			msg: 'Invalid Token'
		})
	}

	await userController.validateToken(res, req.headers.authorization);

	next();
})

server.use(bodyParser.json());

module.exports = server;
