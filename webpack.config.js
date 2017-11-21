const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:[
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'],
  externals:{
    jquery:'jQuery',
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output:{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    alias:{
      Main:path.resolve(__dirname,'./app/components/Main.js'),
      Navigation:path.resolve(__dirname,'./app/components/Navigation.js'),
      Countdown:path.resolve(__dirname,'./app/components/Countdown.js'),
      Timer:path.resolve(__dirname,'./app/components/Timer.js'),
      applicationStyles:path.resolve(__dirname,'./app/styles/app.scss')
    },
    extensions:[' ', '.js', '.jsx', '.css', '.scss']
  },
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['es2015', 'react', 'stage-0']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]

  }
};
