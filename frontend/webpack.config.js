const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'output'),
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'output'),
		port: 5000,
		open: true,
		hot: true
	}
}