var request           = require('superagent');
module.exports = {

  getAllCommitments: function(success, failure) {
		var rawCommitments = [];

		request
			.get('/api/commitments', { page: 1, skip: 0 })
			.end(function(err, res) {
        if (!err) {
          if (res.body && res.body.commitments) {
  					var rawCommitments = res.body.commitments;
            success(rawCommitments)
  				}
        } else {
          alert('error of fetching commitments')
        }
			});
  },

  createCommitment: function(commitment, success, failure) {
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
          success(res.body.commitment)
				} else {
          failure(err);
				}
			});

  }

};
