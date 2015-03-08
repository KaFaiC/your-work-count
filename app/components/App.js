/** @jsx React.DOM */

var React 					= require('react');
var Loader				  = require('./Loader.js');
var NotificationBar = require('./NotificationBar.js');
var CommitmentList  = require('./CommitmentList.js');
var CommitmentStore = require('../stores/commitmentStore.js');
var Header          = require('./Header.js');
// Export the App component

function getCommitmentState() {
	return {
			allCommitments: CommitmentStore.getAll()
		};
};

var App = React.createClass({

	getInitialState: function(props) {
		props = props || this.props;
		console.log(this.props)
		return props
		// return getCommitmentState();
	},

	componentDidMount: function() {
		CommitmentStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		CommitmentStore.removeChangeListener(this._onChange);
	},

  // Render the component
  render: function(){

    return (
			<div>
				<Header />
				<CommitmentList 
					allCommitments={this.state.allCommitments}
				/>
				<button className="btn btn-default">Bootstrap</button>
    	</div>
		)

  },

	_onChange: function() {
		this.setState(getTodoState());
	}

});

module.exports = App;
