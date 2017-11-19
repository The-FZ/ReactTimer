var React = require('react');

var About = (props) =>{
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <p>This is a weather application build on React. I have build this as I am learning react javascript library.</p>
      <p>
        Here are some of the tools we have used.
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JS framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
