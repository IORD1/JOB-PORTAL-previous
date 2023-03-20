const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		default: false
	},
	name : {
		type: String,
		default : false
	}
});

const Auth = mongoose.model("Auth", authSchema);

module.exports =Auth;