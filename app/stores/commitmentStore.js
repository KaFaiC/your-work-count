var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var _             = require('underscore');
var AppUtils 			= require('../utils/AppUtils');
var AppConstants 	= require('../constants/AppConstants')

var ActionTypes 	= AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';
var _commitments = {};

var CommitmentStore = _.extend({}, EventEmitter.prototype, {

	init: function(rawCommitments) {
		rawCommitments.forEach(function(commitment) {
			_commitments[commitment.id] = {
				id: commitment.id,
				title: commitment.title,
				description: commitment.description,
				timestamp: commitment.timestamp
			}
		})
	},

	getAll: function() {
		return _commitments;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(function(action) {
	switch(action.type) {
		case ActionTypes.RECEIVE_RAW_COMMITMENTS:
			CommitmentStore.init(action.rawCommitments);
			CommitmentStore.emitChange();
			break;
		case ActionTypes.CREATE_COMMITMENT:
			var commitment = AppUtils.getCreatedCommitmentData(
        action.title,
        action.description
      );
      _commitments[commitment.id] = commitment;
			CommitmentStore.emitChange();
      break;
		default:
			//nothing happen
	}
});

module.exports = CommitmentStore;
