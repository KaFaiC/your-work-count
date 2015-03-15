var AppActionCreators = require('../actions/AppActionCreators');
var request           = require('superagent');
module.exports = {

  getAllCommitments: function() {
		var rawCommitments = [];

		request
			.get('/api/commitments', { page: 1, skip: 0 })
			.end(function(err, res) {
				console.log(res.body);
				if (res.body && res.body.commitments) {
					var rawCommitments = res.body.commitments;
			    AppActionCreators.receiveAll(rawCommitments);
				}
			});
  },

  createCommitment: function(commitment) {
		var timestamp = Date.now();
    var id = 'commitment' + timestamp;
    var createdCommitment = {
      id: id,
      title: commitment.title,
      description: commitment.description,
      timestamp: timestamp
    };
		
		request
			.post('/api/commitments', createdCommitment)
			.end(function(err, res) {
				if (!err) {
					AppActionCreators.receiveCreatedCommitment(createdCommitment);
				} else {
					console.log('heee');
					console.log(err)
				}
				console.log(res.body);
				console.log(res);
			});

  }

};
