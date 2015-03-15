var mongoose = require('mongoose');

//Create a new schema for our tweet data
var CommitmentSchema = new mongoose.Schema({
	title: 				{ type: String, default: '', trim: true},
	description: 	{ type: String, default: '', trim: true},
	created_at: 	{ type: Date, default: Date.now }
});

//Validations
CommitmentSchema.path('title').required(true, 'Commitment title cannnot be blank');
CommitmentSchema.path('description').required(true, 'Commitment description cannnot be blank');
CommitmentSchema.statics.getTweets = function(page, skip, callback) {
};

CommitmentSchema.statics.getCommitments = function(page, skip, callback) {
	var commitments = [],
			start = (page * 10) + skip;
	this.find({},
		 	'title description created_at',
			{ skip: start,
				limit: 10}
			)
		.sort({ created_at: 'desc' })
		.exec(function(err, docs) {
			if (!err) {
				commitments = docs;
			};
			callback(commitments);
		});
};

console.log('fuckkkkk')
mongoose.model('Commitment', CommitmentSchema);
