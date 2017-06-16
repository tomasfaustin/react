var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations that you can screw around with:</p>
        <ol>
          <li>
          <Link to="/?location=Los Angeles">Los Angeles, California, USA</Link>
          </li>
          <li>
            <Link to="/?location=Montreal">Montreal, Quebec, Canada</Link>
          </li>
        </ol>
      </div>
    )
}

module.exports = Examples;
