var express = require('express')
var controllers = require('../controllers')

var router = express.Router()

router.get('/:resource', function(req,res,next) {
	var resource = req.params.resource
	var controller = controllers[resource]

	if(!controller) {
		res.json({
			confirmation:'fail',
			message: 'resource not found'
		})
		return
	}

	controller.find(req.query, function(err, results){
		if (err) {
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}
		res.json({
			confirmation: 'success',
			data: results
		})
	})
})

router.get('/:resource/:id', function(req, res, next){
	var resource = req.params.resource
	var id = 123
	var controller = controllers[resource]
	if (!controller) {
		res.json({
			confirmation: 'fail',
			message: 'resource not found'
		})
		return
	}

	controller.findById(id, function(err, result){
		if (err) {
			res.json({
				confirmation: "fail",
				message: "id: " + id + ",is not found"
			})
			return
		}
		res.json({
			confirmation: 'success',
			data: result
		})
	})
})

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]
	if(!controller) {
		res.json({
			confirmation:'fail',
			message: 'resource not found'
		})
		return
	}

	controller.create(req.body, function(err, result){
		if (err) {
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}
		res.json({
			confirmation: 'success',
			result: result
		})
	})

})

module.exports = router