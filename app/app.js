var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var {BrowserRouter, Route, Switch} = require('react-router-dom');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <BrowserRouter>

    <div>
    <Route path='/' component={Main}/>
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/examples' component={Examples}/>
      <Route path='/' component={Weather} />
    </Switch>
    </div>

  </BrowserRouter>,
  document.getElementById('app')
);
