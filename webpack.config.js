var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		app:'./src/app.js' //where to find react code
	},
	output: {
		filename: 'public/build/bundle.js', // target transpile code to execute by browser
		sourceMapFilename: 'public/build/bundle.map'//debug file path
	},
	devtool: '#source-map',
	module: {
		//here is where to use babel
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015']
				}
			}
		]
	}
}