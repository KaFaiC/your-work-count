var AppActionCreators = require('../actions/appActionCreators');

module.exports = {

  getAllCommitments: function() {
    // simulate retrieving data from a database
    var rawCommitments = JSON.parse(localStorage.getItem('commitments')) || [];

    // simulate success callback
    AppActionCreators.receiveAll(rawCommitments);
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
