var mongoose = require('mongoose')

var BlogSchema = new mongoose.Schema({
	title: {type: String, default: ""},
	content: {type: String, default: ""},
	timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('BlogSchema',BlogSchema)