/** @jsx React.DOM */

var React = require('react');

var CommitmentItem = React.createClass({

	render: function() {
		var commitment = this.props.commitment;
		return (
			<li>
				{commitment.id} {commitment.title} {commitment.status}
			</li>
		);
	}
});

module.exports = CommitmentItem;
