var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var Controls = createReactClass({

  PropTypes:{
    countdownStatus:PropTypes.string.isRequired,
    onStatusChange:PropTypes.func.isRequired
  },
  onStatusChange:function(newStatus){
    return ()=>{
      this.props.onStatusChange(newStatus);
    };
  },
  render:function(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = ()=>{
      if(countdownStatus === 'started'){
        return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
      }else{
        return <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow' onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );

  }
});

module.exports = Controls;
