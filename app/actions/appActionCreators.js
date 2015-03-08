var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

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
