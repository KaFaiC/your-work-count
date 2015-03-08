var JSX = require('node-jsx').install(),
  React = require('react'),
  App   = require('./app/components/App')
	CommitmentStore = require('./app/stores/commitmentStore');
module.exports = {

  index: function(req, res) {
      var markup = React.renderToString(
        App({
          // allCommitments: CommitmentStore.getAll()
				})
      );
      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: [JSON.stringify(CommitmentStore.getAll())] // Pass current state to client side
      });
  }
}
