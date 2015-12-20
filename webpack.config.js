var webpack = require('webpack');  
module.exports = {  
    entry: {
		//"index":"./js/app.js",
        "main":"./js/main.js"
		//,"lib":["./js/lib/zepto.js","./js/lib/cordova.js","./js/lib/cordova_plugins.js"]
	},
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
		/*new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
		  sourceMap: false,
		  mangle: true
		})*/
    ]

};