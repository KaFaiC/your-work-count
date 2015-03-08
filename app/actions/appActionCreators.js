var appDispatcher = require('../dispatcher/appDispatcher');
var AppConstants = require('../constants/appConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawCommitments) {
    appDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_COMMITMENTS,
      rawCommitments: rawCommitments
    })
  },

  receiveCreatedCommitment: function(createdCommitment) {
    appDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_CREATED_COMMITMENT,
      rawCommitment: createdCommitment
    });
  }

};
