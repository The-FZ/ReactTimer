var React = require('react');
var createReactClass = require('create-react-class');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
        case 'stopped':
          this.setState({
            count:0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount:function(){
    clearInterval(this.timer);
    this.timer=undefined;
  },

  startTimer:function(){
    this.timer = setInterval(() =>{
      var newCount = this.state.count -1;
      this.setState({
        count:newCount>=0 ?newCount:0
      });
      if(newCount===0){
        this.setState({
          countdownStatus:'stopped'
        });
      }
    },1000);
  },

  handleStatusChange:function(newStatus){
    this.setState({
      countdownStatus:newStatus
    });
  },

  render:function(){
    var {count,countdownStatus} = this.state;
    var renderControlArea = ()=>{
      if(countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      }
      else{
        return <CountdownForm onSetCountDown={this.handleSetCountDown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
