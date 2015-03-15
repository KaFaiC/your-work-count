var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var CommitmentAPI = require('../api/CommitmentAPI');
var AppUtils = require('../utils/AppUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  createCommitment: function(title, description) {
    var commitment = AppUtils.getCreatedCommitmentData(title, description);
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_COMMITMENT,
      commitment: commitment
    });

    CommitmentAPI.createCommitment(commitment, function() {
      AppDispatcher.dispatch({
        type: ActionTypes.CREATE_COMMITMENT_SUCCESS,
        commitment_id: commitment.id
      });
    }, function(err) {
      AppDispatcher.dispatch({
        type: ActionTypes.CREATE_COMMITMENT_FAIL,
        commitment_id: commitment.id,
        error: err
      });
    });
  }

};
