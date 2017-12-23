var express = require('express') 
var router = express.Router() 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }) 
}) 
router.get('/createblog', function(req, res, next){
	res.render('createblog')
})


module.exports = router 
