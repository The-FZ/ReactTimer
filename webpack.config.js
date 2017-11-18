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
      Nav:path.resolve(__dirname,'./app/components/Nav.js'),
      Main:path.resolve(__dirname,'./app/components/Main.js'),
      Weather:path.resolve(__dirname,'./app/components/Weather.js'),
      WeatherForm:path.resolve(__dirname,'./app/components/WeatherForm.js'),
      About:path.resolve(__dirname,'./app/components/About.js'),
      Examples:path.resolve(__dirname,'./app/components/Examples.js'),
      WeatherMessage:path.resolve(__dirname,'./app/components/WeatherMessage.js'),
      openWeatherMap:path.resolve(__dirname,'./app/api/openWeatherMap.js')
    },
    extensions:[' ', '.js', '.jsx', '.css']
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
