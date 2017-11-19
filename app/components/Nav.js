var React = require('react');
var createReactClass=require('create-react-class');
var {NavLink} = require('react-router-dom');

var Nav = createReactClass({
  render:function(){
    return (
        <div className='top-bar'>
            <div className='top-bar-left'>
              <ul className='menu'>
                <li className='menu-text'>React Weather App </li>
                <li><NavLink to='/weather' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather </NavLink></li>
                <li><NavLink to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About </NavLink></li>
                <li><NavLink to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples </NavLink></li>
              </ul>
            </div>
        </div>
    );
  }
});

module.exports = Nav;
