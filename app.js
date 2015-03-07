/** @jsx React.DOM */

var React = require('react');
var App = require('./components/App');

// Snag the initial state that was passed from the server side
// Render the components, picking up where react left off on the server
React.render(
  <App />,
  document.getElementById('react-app')
);
