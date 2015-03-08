/** @jsx React.DOM */

var React = require('react');

var CommitmentItem = React.createClass({

	render: function() {
		var commitment = this.props.commitment;
		return (
			<li>
				{commitment.title}
			</li>
		);
	}
});

module.exports = CommitmentItem;
