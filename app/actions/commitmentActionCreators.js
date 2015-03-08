var appDispatcher = require('../dispatcher/appDispatcher');
var AppConstants = require('../constants/appConstants');
var CommitmentAPI = require('../api/CommitmentAPI');
var AppUtils = require('../utils/AppUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  createCommitment: function(title, description) {
    appDispatcher.dispatch({
      type: ActionTypes.CREATE_COMMITMENT,
      title: title,
      description: description
    });
    var commitment = AppUtils.getCreatedCommitmentData(title, description);
    CommitmentAPI.createCommitment(commitment);
  }

};
