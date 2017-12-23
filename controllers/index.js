var BlogController = require('./BlogController')
var CommentController = require('./CommentController')
var ProfileController = require('./ProfileController')

module.exports = {
	blog: BlogController,
	comment: CommentController,
	profile: ProfileController
}