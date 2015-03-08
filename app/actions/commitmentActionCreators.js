var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var CommitmentAPI = require('../api/CommitmentAPI');
var AppUtils = require('../utils/AppUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  createCommitment: function(title, description) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_COMMITMENT,
      title: title,
      description: description
    });
    var commitment = AppUtils.getCreatedCommitmentData(title, description);
    CommitmentAPI.createCommitment(commitment);
  }

};
