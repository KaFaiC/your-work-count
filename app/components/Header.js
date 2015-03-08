/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
			<header id="header">
				<h1>Your Work Count</h1>
			</header>
		)
	}
});

module.exports = Header;
