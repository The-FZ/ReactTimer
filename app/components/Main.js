var React = require('react');
var Navigation = require('Navigation');
var Countdown = require('Countdown');
var Timer = require('Timer');
var {BrowserRouter, Route, Switch} = require('react-router-dom');

var Main=(props)=>{
  return (
      <BrowserRouter>
        <div>
        <Route path='/' component={Navigation}/>
          <div>
            <Switch>
              <Route path='/countdown' component={Countdown}/>
              <Route path='/' component={Timer}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
};

module.exports = Main;
