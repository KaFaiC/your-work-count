var JSX = require('node-jsx').install(),
  React = require('react'),
  App   = require('./components/App');

module.exports = {

  index: function(req, res) {
      var markup = React.renderToString(
        App({})
      );

      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: null // Pass current state to client side
      });
  }
}
