const contactSchema = require('./../model/contact');
const errorHandler = require('./../util/error.handler');

class contactController{
	async add(newContact){
		try{
			newContact = {...newContact, ...{userId: userSession.id}}
			let response = await contactSchema.create(newContact);
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, update){
		try{
			let response = await contactSchema.updateOne({_id: id, userId: userSession.id}, update);
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetch(){
		try{
			let response = await contactSchema.find({userId: userSession.id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await contactSchema.deleteOne({_id: id, userId: userSession.id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
}

module.exports = new contactController();
