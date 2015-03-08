/** @jsx React.DOM */

var React = require('react');
var CommitmentActionCreators = require('../actions/CommitmentActionCreators.js');

var CommitmentForm = React.createClass({

	getInitialState: function() {
		return {
			title: '',
			description: ''
		}
	},

	render: function() {
		var commitment = this.props.commitment;

		return (
			<form className="commitment-form">
				<input
					className="commitment-title"
					ref="title"
					value={this.state.title}
					onChange={this._onTitleChange}
				/>
				<textarea
					className="commitment-description"
					ref="description"
					value={this.state.description}
					onChange={this._onDescriptionChange}
				/>
				<button
					className="btn btn-default"
					onClick={this._onFormSubmit}
				>
					Submit
				</button>
			</form>
		);
	},

	_onTitleChange: function(event, value) {
		this.setState({title: event.target.value})
	},

	_onDescriptionChange: function(event, value) {
		this.setState({description: event.target.value})
	},

	_onFormSubmit: function(event, value) {
		var title = this.state.title.trim();
		var description = this.state.description.trim();
		console.log(CommitmentActionCreators);
		event.preventDefault();
		CommitmentActionCreators.createCommitment(title, description)
	}
});

module.exports = CommitmentForm;
