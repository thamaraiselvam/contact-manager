const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	phone: {
		type: String,
		required: true,
		unique: true
	},
	city: {
		type: String,
		required: true
	},
	favorite: {
		type: Boolean,
		default: false
	}
});

module.exports = new mongoose.model("contact", contactSchema);
