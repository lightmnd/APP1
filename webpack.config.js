module.exports = {
  entry : ['babel-polyfill', './app/index.js'],
  output: {
    path: __dirname + './build',
    filename: 'bundle.js'    
  },
  module : {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }],
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel-loader',
        exclude : /node_modules/
      }
    ]
  },
  devServer : {
    port : 3000,
    contentBase : './build',
    inline : true
  }
}
