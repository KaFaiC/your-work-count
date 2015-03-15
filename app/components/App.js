/** @jsx React.DOM */

var React 						= require('react');
var Loader				  	= require('./Loader.js');
var NotificationBar 	= require('./NotificationBar.js');
var CommitmentList  	= require('./CommitmentList.js');
var CommitmentStore	 	= require('../stores/commitmentStore.js');
var CommitmentForm  	= require('./CommitmentForm.js');
var Header          	= require('./Header.js');
var AppActionCreators = require('../actions/AppActionCreators.js');
// Export the App component

function getCommitmentStateFromStore() {
	console.log(CommitmentStore.getAll())
	return {
			allCommitments: CommitmentStore.getAll()
		};
};

var App = React.createClass({

	getInitialState: function(props) {
		// props = props || this.props;
		// return props
		return getCommitmentStateFromStore();
	},

	componentDidMount: function() {
		AppActionCreators.initialize();
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
				<CommitmentForm />
    	</div>
		)

  },

	_onChange: function() {
		console.log(getCommitmentStateFromStore());
		this.setState(getCommitmentStateFromStore());
	}

});

module.exports = App;
