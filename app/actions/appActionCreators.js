var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var CommitmentAPI = require('../api/CommitmentAPI');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  initialize: function() {
    CommitmentAPI.getAllCommitments(function(rawCommitments) {
      AppDispatcher.dispatch({
        type: ActionTypes.RECEIVE_RAW_COMMITMENTS,
        rawCommitments: rawCommitments
      })
    }, function() {

    });
    AppDispatcher.dispatch({
      type: ActionTypes.INITIALIZE_APP
    })
  },

  receiveAll: function(rawCommitments) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_COMMITMENTS,
      rawCommitments: rawCommitments
    })
  },

  receiveCreatedCommitment: function(createdCommitment) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_CREATED_COMMITMENT,
      rawCommitment: createdCommitment
    });
  }

};
