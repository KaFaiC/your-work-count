/** @jsx React.DOM */

var React = require('react');
var App = require('./app/components/App');
var CommitmentsAPI = require('./app/api/commitmentAPI')

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
CommitmentsAPI.getAllCommitments();
// Snag the initial state that was passed from the server side
// Render the components, picking up where react left off on the server
React.render(
	<App />,
  // <App allCommitments={initialState} />,
  document.getElementById('react-app')
);
