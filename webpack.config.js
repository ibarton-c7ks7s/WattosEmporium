const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './app/index.html',
	filename: 'index.html',
	inject: 'body'
})

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
		entry: APP_DIR + '/index.js',
		output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.(jpg|jpeg|png|gif)$/,
			loader: 'file-loader',
			options: {
				name: './images/[name].[ext]'
			}
		},{
			test: /\.(woff|woff2)$/,
			loader: 'url-loader',
			options: {
				name: './fonts/[name].[ext]'
			}
		},{
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			},{
				loader: "sass-loader",
				options: {
					sourceMap: true,
					includePaths: [
						path.resolve(__dirname, 'node_modules/normalize-css/normalize.css'),
						path.resolve(__dirname, 'node_modules/flexboxgrid-sass/flexboxgrid.scss'),
						path.resolve(__dirname, 'node_modules/animate.css/animate.min.css')
					]
				}
			},{
				loader: 'sass-resources-loader',
				options: {
					resources: [
						'./app/Sass/_fonts.scss',
						'./app/Sass/_shared.scss'
					]
				  },
				}]
		},{
			test: /\.js$/,
			use: [{ loader: 'babel-loader' }],
			exclude: /node_modules/
		},{ 
			test: /\.jsx$/,
			use: [{ loader: 'babel-loader' }],
			exclude: /node_modules/
		}]
	},
	plugins: [HtmlWebpackPluginConfig]
}