var fs  = require('fs');
var env = {};
var envFile = __dirname + '/.env.json';

if (fs.existsSync(envFile)) {
	env = fs.readFileSync(envFile, 'utf-8');
	env = JSON.parse(env);
	Object.keys(env).forEach(function(key) {
		process.env[key] = env[key];
	});
}

module.exports = {
	db: process.env.MONGOHQ_URL || 'mongodb://localhost/your_work_count_dev'
};

