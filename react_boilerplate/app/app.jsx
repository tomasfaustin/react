var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Thomas Bo Bahmmus',
  location: 'Venice Beach'
};

var objTwo = {
  age: 39,
  ...objOne
};

console.log(objTwo)

ReactDOM.render(
  <h1>Boilerplate App!</h1>,
  document.getElementById('app')
);
