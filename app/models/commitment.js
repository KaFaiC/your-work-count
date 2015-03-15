var mongoose = require('mongoose');

//Create a new schema for our tweet data
var CommitmentSchema = new mongoose.Schema({
	id: 				{ type: String, unique: true},
	title: 				{ type: String, default: '', trim: true},
	description: 	{ type: String, default: '', trim: true},
	created_at: 	{ type: Date, default: Date.now }
});

//Validations
CommitmentSchema.path('id').required(true, 'Commitment id cannnot be blank');
CommitmentSchema.path('title').required(true, 'Commitment title cannnot be blank');
CommitmentSchema.path('description').required(true, 'Commitment description cannnot be blank');
CommitmentSchema.statics.getTweets = function(page, skip, callback) {
};

CommitmentSchema.statics.getCommitments = function(page, skip, callback) {
	var commitments = [],
			start = ((page - 1) * 10) + skip;
	this.find({},
		 	'id title description created_at',
			{ skip: 0,
				limit: 10000}
			)
		.sort({ created_at: 'desc' })
		.exec(function(err, docs) {
			if (!err) {
				console.log(docs)
				commitments = docs;
			};
			callback(commitments);
		});
};

console.log('fuckkkkk')
mongoose.model('Commitment', CommitmentSchema);
