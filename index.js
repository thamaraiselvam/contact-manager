const server = require("express")();
const config = require("./config/config");
const middleware = require("./middleware/middleware");
const contactRouter = require("./router/contact");
const adminRouter = require("./router/admin");

server.use(middleware);
server.use("/contact", contactRouter);
server.use("/admin", adminRouter);

server.listen(config.app.port, () => {
	console.log(`Service is listening to ${config.app.port}`);
});
