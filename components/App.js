/** @jsx React.DOM */

var React = require('react');
var Loader = require('./Loader.js');
var NotificationBar = require('./NotificationBar.js');

// Export the App component
module.exports = App = React.createClass({

  // Render the component
  render: function(){

    return (
			<div>
      	<h1> Your Work Count!!!!!</h1>
				<button className="btn btn-default">Bootstrap</button>
    	</div>
		)

  }

});
