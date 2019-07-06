const server = require("express")();
const config = require("./config/config");
const middleware = require("./middleware/middleware");
const contactRouter = require("./router/contact");
const userRouter = require("./router/user");

server.use(middleware);
server.use("/user", userRouter);
server.use("/contact", contactRouter);

server.listen(config.app.port, () => {
	console.log(`Service is listening to ${config.app.port}`);
});
