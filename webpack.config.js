const path = require('path');

module.exports = {
  entry:'./app/app.js',
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
    extensions:[' ', '.js', '.jsx']
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
