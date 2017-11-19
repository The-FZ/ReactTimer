var React = require('react');
var createReactClass=require('create-react-class');
var {NavLink} = require('react-router-dom');

var Nav = createReactClass({
  onSearch:function(event){
    event.preventDefault();
    alert('Not yet wired up !!!');
  },

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
            <div className='top-bar-right'>
              <form onSubmit={this.onSearch}>
                <ul className='menu'>
                  <li>
                    <input type='search' placeholder='search weather by city'/>
                  </li>
                  <li>
                    <input type='submit' className='button' value="Get Weather" />
                  </li>
                </ul>
              </form>
            </div>
        </div>
    );
  }
});

module.exports = Nav;
