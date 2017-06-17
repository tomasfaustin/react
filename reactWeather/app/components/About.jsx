var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the About page. This app was built with the assistance of the incredibly talented <a href="http://www.mead.io/">Andrew Mead</a> and his Udemy React course, which seems to be unavailable at the moment.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> -- This was the JavaScript framework I used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> -- This was the API I used to search for weather data by city name.
        </li>
      </ul>

    </div>
  )
}

module.exports = About;
