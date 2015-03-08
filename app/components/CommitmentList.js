/** @jsx React.DOM */

var React = require('react');
var CommitmentItem = require('./CommitmentItem');

var CommitmentList = React.createClass({

	render: function() {
		if (Object.keys(this.props.allCommitments).length < 1) {
			return null;
		}
		var allCommitments = this.props.allCommitments;
		console.log(allCommitments)

		var commitments = [];
		for (var commitmentId in allCommitments) {
			var key = commitmentId
			commitments.push(<CommitmentItem key={key} commitment={allCommitments[commitmentId]} />);
		}
		console.log(commitments)
		return (
			<section id="commitment-section">
				<ul id="commitment-list">{commitments}</ul>
			</section>
		);
	}
});

module.exports = CommitmentList;
