var mongoose	 = require('mongoose'),
		express 	 = require('express'),
		Commitment = mongoose.model('Commitment'),
		router     = express.Router();

router.route('/commitments')
	.get(function(req, res) {
		console.log('yoooo')
		var page = req.body.page;
		var skip = req.body.skip;
		var commitment = Commitment.getCommitments(page, skip, function(commitments) {
		res.send({commitments: commitments});
		});
	})
	.post(function(req, res) {
		console.log(req.body)
		var commitment = new Commitment(req.body);
		commitment.save(function(err) {
			if(!err) {
				console.log("Created a new commitment:" + commitment);
				return res.send({commitment: commitment});
			} else {
				console.log("err: " + err);
				return res.send(422);
			}
		});
	});


module.exports = router;
