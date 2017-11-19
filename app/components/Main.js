var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var {BrowserRouter, Route, Switch} = require('react-router-dom');

var Main=(props)=>{
  return (
    <div>
    <BrowserRouter>
      <div>
      <Route path='/' component={Nav}/>
        <div className='custom-div'>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/examples' component={Examples}/>
            <Route path='/' component={Weather} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
};

module.exports = Main;
