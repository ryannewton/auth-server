const User = require('../models/user');

exports.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

	// If no email or password was given, return an error
	if(!email || !password) {
		// Note: 422 error means unprocessible entity
		return res.status(422).send({ error: 'You must provide an email and password' });
	}

	// Checks if the email address is already registered
	User.findOne({ email: email }, function(err, existingUser) {
		// If the email was found in the database
		if(existingUser) {
			return res.status(422).send({ error: 'Email is in use' });
		}

		// If email is not in the database, we can create a new account
		const user = new User({
			email: email,
			password: password
		});

		// Save profile to database
		user.save(function(err) {
			res.json({ message: "Profile created" });
		});
	});
}
