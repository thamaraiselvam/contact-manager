const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true,
		unique: true
	}
});

module.exports = new mongoose.model("contact", contactSchema);
