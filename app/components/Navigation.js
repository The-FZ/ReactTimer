var React = require('react');
var createReactClass=require('create-react-class');
var {NavLink} = require('react-router-dom');

var Nav = (props) =>{
    return (
        <div className='top-bar'>
          <div className='top-bar-left'>
            <ul className='menu'>
              <li className='menu-text'>React Timer App</li>
              <li><NavLink to='/timer' activeClassName='active' activeStyle={{fontWeight:'bold',color:'skyblue'}}>Timer</NavLink></li>
              <li><NavLink to='/countdown' activeClassName='active' activeStyle={{fontWeight:'bold',color:'skyblue'}}>Countdown</NavLink></li>
            </ul>
          </div>
          <div className='top-bar-right'>
              <ul className='menu'>
                <li className='menu-text'>Created by <a href='https://github.com/the-fz' target='_blank'>Zafar Khan</a></li>
              </ul>
         </div>
        </div>
    );
  };

module.exports = Nav;
