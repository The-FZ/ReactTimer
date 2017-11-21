var React = require('react');
var createReactClass = require('create-react-class');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


var Countdown = createReactClass({
  getInitialState:function(){
    return {
      count:0,
      countdownStatus:'stopped'
    };
  },

  handleSetCountDown:function(seconds){
    this.setState({
      count:seconds,
      countdownStatus:'started'
    });
  },

  componentDidUpdate:function(prevProps,prevState){
    if(this.state.countdownStatus!==prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer:function(){
    this.Timer = setInterval(() =>{
      var newCount = this.state.count -1;
      this.setState({
        count:newCount>=0 ?newCount:0
      });
    },1000);
  },

  render:function(){
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountDown={this.handleSetCountDown}/>
      </div>
    );
  }
});

module.exports = Countdown;
