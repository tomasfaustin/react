var React = require('react');
var Nav = require('Nav');
var Clock = require('Clock');
var Controls = require('Controls');
var Timer = require('Timer');

var Main = (props) => {
  return (
    <div>
      <div>
       <div>
         <p>Main.jsx Rendered</p>
         {props.children}
       </div>
      </div>
    </div>
  );
}

module.exports = Main;
