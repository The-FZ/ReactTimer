var React = require('react');
var createReactClass = require('create-react-class');
var Clock = require('Clock');

var Countdown = createReactClass({
  render:function(){
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    )
  }
});

module.exports = Countdown;
