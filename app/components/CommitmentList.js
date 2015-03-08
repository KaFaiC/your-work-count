/** @jsx React.DOM */

var React = require('react');
var CommitmentItem = require('./CommitmentItem');

var CommitmentList = React.createClass({

	render: function() {
		console.log('*****')
		console.log(this.props)
		if (Object.keys(this.props.allCommitments).length < 1) {
			return null;
		}
		var allCommitments = this.props.allCommitments;
		var commitments = [];

		for (var i = 0 ; i < allCommitments.length ; i++) {
			var key = 'commitment' + i;
			console.log(key);
			commitments.push(<CommitmentItem key={key} commitment={allCommitments[i]} />);
		}
		return (
			<section id="commitment-section">
				<ul id="commitment-list">{commitments}</ul>
			</section>
		);
	}
});

module.exports = CommitmentList;
