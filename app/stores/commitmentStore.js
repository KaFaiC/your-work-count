var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var _             = require('underscore');

var CHANGE_EVENT = 'change';
var _commitments = ['Commitment1', 'Commitment2'];

var CommitmentStore = _.extend({}, EventEmitter.prototype, {
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
	var title;

	switch(action.actionType) {
		case CommitmentConstants.COMMITMENT_CREATE:
			title = action.title.trim();
 			if (title.length > 0) {
				create(text);
			}
			CommitmentStore.emitChange();
			break;
		default:
			//nothing happen
	}
});

module.exports = CommitmentStore;
