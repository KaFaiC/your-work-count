var AppActionCreators = require('../actions/AppActionCreators');
var request           = require('superagent');
module.exports = {

  getAllCommitments: function() {
		var rawCommitments = [];

		request
			.get('/api/commitments', { page: 1, skip: 0 })
			.end(function(err, res) {
				if (res.body && res.body.results) {
					var rawCommitments = res.body.results
			    AppActionCreators.receiveAll(rawCommitments);
				}
			});
		// simulate retrieving data from a database

    // var rawCommitments = JSON.parse(localStorage.getItem('commitments')) || [];

    // simulate success callback
  },

  createCommitment: function(commitment) {
    // simulate writing to a database
    var rawCommitments = JSON.parse(localStorage.getItem('commitments')) || [];
    var timestamp = Date.now();
    var id = 'commitment' + timestamp;
    var createdCommitment = {
      id: id,
      title: commitment.title,
      description: commitment.description,
      timestamp: timestamp
    };
    rawCommitments.push(createdCommitment);
    localStorage.setItem('commitments', JSON.stringify(rawCommitments));

    // simulate success callback
    setTimeout(function() {
      AppActionCreators.receiveCreatedCommitment(createdCommitment);
    }, 100);
  }

};
