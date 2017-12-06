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
    loaders: [
        {
            test: /\.css$/,
           // include: path.resolve(__dirname, './assets/css/'),
            loader: "style-loader!css-loader!resolve-url-loader"
        },

        {
            test: /\.scss$/,
           // include: path.resolve(__dirname, './scss/'),
            loader: "style-loader!css-loader!resolve-url-loader!sass-loader"
        },
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
