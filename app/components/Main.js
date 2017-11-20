var React = require('react');
var Navigation = require('Navigation');
var {BrowserRouter, Route, Switch} = require('react-router-dom');

var Main=(props)=>{
  return (
      <BrowserRouter>
        <div>
        <Route path='/' component={Navigation}/>
          <div>
            <Switch>

            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
};

module.exports = Main;
