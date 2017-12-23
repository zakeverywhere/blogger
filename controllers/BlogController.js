var Blog = require('../models/Blog')

module.exports = {
	find: function (params, callback){
		Blog.find(params, function(err, blogs){
			if(err) {
				callback(err, null)
				return
			}
			callback(null,blogs)
		})
	},
	findById: function(params, callback){
		Blog.findById(params, function(err, blog){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, blog)
		})
	},
	update: function(id, params, callback){
		Blog.findByIdAndUpdate(id, params, {new: true}, function(err, blog){
			if (err) {
				callback(err,null)
				return
			}
			callback(null, blog)
		})
	},
	create: function(params, callback){
		Blog.create(params, function(err, blog){
			if(err) {
				callback(err, null)
				return
			}
			callback(null,blog)
		})
	},
	delete: function(id, callback){
		Blog.findByIdAndRemove(id, function(err) {
			if (err) {
				callback(err,null)
				return
			}
		})
	}
}